import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { Type } from '@sinclair/typebox';
import { FastifyPluginCallback } from 'fastify';
import { Server } from 'http';
import { SERVER_VERSION } from '../../server-version';
import { ApiStatusResponse } from '../schemas';

export const StatusRoutes: FastifyPluginCallback<
  Record<never, never>,
  Server,
  TypeBoxTypeProvider
> = (fastify, options, done) => {
  fastify.get(
    '/',
    {
      schema: {
        operationId: 'getApiStatus',
        summary: 'API Status',
        description: 'Displays the status of the API and its current workload',
        tags: ['Status'],
        response: {
          200: ApiStatusResponse,
        },
      },
    },
    async (request, reply) => {
      const result = await fastify.db.sqlTransaction(async sql => {
        const smartContracts: Record<string, number> = {};
        const contractCounts = await fastify.db.getSmartContractCounts();
        for (const row of contractCounts) {
          smartContracts[row.sip] = row.count;
        }

        const tokens: Record<string, number> = {};
        const tokenCounts = await fastify.db.getTokenCounts();
        for (const row of tokenCounts) {
          tokens[row.type] = row.count;
        }

        const queue: Record<string, number> = {};
        const jobCounts = await fastify.db.getJobStatusCounts();
        for (const row of jobCounts) {
          queue[row.status] = row.count;
        }

        return {
          server_version: `token-metadata-api ${SERVER_VERSION.tag} (${SERVER_VERSION.branch}:${SERVER_VERSION.commit})`,
          status: 'ready',
          tokens: tokenCounts.length ? tokens : undefined,
          token_contracts: contractCounts.length ? smartContracts : undefined,
          job_queue: jobCounts.length ? queue : undefined,
        };
      });
      await reply.send(result);
    }
  );
  done();
};
