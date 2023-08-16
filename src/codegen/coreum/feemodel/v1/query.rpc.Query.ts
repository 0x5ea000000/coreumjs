import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryMinGasPriceRequest, QueryMinGasPriceResponse, QueryRecommendedGasPriceRequest, QueryRecommendedGasPriceResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** MinGasPrice queries the current minimum gas price required by the network. */
  minGasPrice(request?: QueryMinGasPriceRequest): Promise<QueryMinGasPriceResponse>;
  /** RecommendedGasPrice queries the recommended gas price for the next n blocks. */
  recommendedGasPrice(request: QueryRecommendedGasPriceRequest): Promise<QueryRecommendedGasPriceResponse>;
  /** Params queries the parameters of x/feemodel module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.minGasPrice = this.minGasPrice.bind(this);
    this.recommendedGasPrice = this.recommendedGasPrice.bind(this);
    this.params = this.params.bind(this);
  }
  minGasPrice(request: QueryMinGasPriceRequest = {}): Promise<QueryMinGasPriceResponse> {
    const data = QueryMinGasPriceRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.feemodel.v1.Query", "MinGasPrice", data);
    return promise.then(data => QueryMinGasPriceResponse.decode(new _m0.Reader(data)));
  }
  recommendedGasPrice(request: QueryRecommendedGasPriceRequest): Promise<QueryRecommendedGasPriceResponse> {
    const data = QueryRecommendedGasPriceRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.feemodel.v1.Query", "RecommendedGasPrice", data);
    return promise.then(data => QueryRecommendedGasPriceResponse.decode(new _m0.Reader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.feemodel.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    minGasPrice(request?: QueryMinGasPriceRequest): Promise<QueryMinGasPriceResponse> {
      return queryService.minGasPrice(request);
    },
    recommendedGasPrice(request: QueryRecommendedGasPriceRequest): Promise<QueryRecommendedGasPriceResponse> {
      return queryService.recommendedGasPrice(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};