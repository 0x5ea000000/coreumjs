import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStakingParamsRequest, QueryStakingParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** StakingParams queries the staking parameters of the module. */
  stakingParams(request?: QueryStakingParamsRequest): Promise<QueryStakingParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.stakingParams = this.stakingParams.bind(this);
  }
  stakingParams(request: QueryStakingParamsRequest = {}): Promise<QueryStakingParamsResponse> {
    const data = QueryStakingParamsRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.customparams.v1.Query", "StakingParams", data);
    return promise.then(data => QueryStakingParamsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    stakingParams(request?: QueryStakingParamsRequest): Promise<QueryStakingParamsResponse> {
      return queryService.stakingParams(request);
    }
  };
};