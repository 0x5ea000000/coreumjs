import { Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryTokensRequest, QueryTokensResponse, QueryTokenRequest, QueryTokenResponse, QueryTokenUpgradeStatusesRequest, QueryTokenUpgradeStatusesResponse, QueryBalanceRequest, QueryBalanceResponse, QueryFrozenBalancesRequest, QueryFrozenBalancesResponse, QueryFrozenBalanceRequest, QueryFrozenBalanceResponse, QueryWhitelistedBalancesRequest, QueryWhitelistedBalancesResponse, QueryWhitelistedBalanceRequest, QueryWhitelistedBalanceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/asset/ft module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Tokens queries the fungible tokens of the module. */
  tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
  /** Token queries the fungible token of the module. */
  token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
  /** TokenUpgradeStatuses returns token upgrades info. */
  tokenUpgradeStatuses(request: QueryTokenUpgradeStatusesRequest): Promise<QueryTokenUpgradeStatusesResponse>;
  /** Balance returns balance of the denom for the account. */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** FrozenBalances returns all the frozen balances for the account. */
  frozenBalances(request: QueryFrozenBalancesRequest): Promise<QueryFrozenBalancesResponse>;
  /** FrozenBalance returns frozen balance of the denom for the account. */
  frozenBalance(request: QueryFrozenBalanceRequest): Promise<QueryFrozenBalanceResponse>;
  /** WhitelistedBalances returns all the whitelisted balances for the account. */
  whitelistedBalances(request: QueryWhitelistedBalancesRequest): Promise<QueryWhitelistedBalancesResponse>;
  /** WhitelistedBalance returns whitelisted balance of the denom for the account. */
  whitelistedBalance(request: QueryWhitelistedBalanceRequest): Promise<QueryWhitelistedBalanceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.tokens = this.tokens.bind(this);
    this.token = this.token.bind(this);
    this.tokenUpgradeStatuses = this.tokenUpgradeStatuses.bind(this);
    this.balance = this.balance.bind(this);
    this.frozenBalances = this.frozenBalances.bind(this);
    this.frozenBalance = this.frozenBalance.bind(this);
    this.whitelistedBalances = this.whitelistedBalances.bind(this);
    this.whitelistedBalance = this.whitelistedBalance.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  tokens(request: QueryTokensRequest): Promise<QueryTokensResponse> {
    const data = QueryTokensRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Query", "Tokens", data);
    return promise.then(data => QueryTokensResponse.decode(new _m0.Reader(data)));
  }
  token(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    const data = QueryTokenRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Query", "Token", data);
    return promise.then(data => QueryTokenResponse.decode(new _m0.Reader(data)));
  }
  tokenUpgradeStatuses(request: QueryTokenUpgradeStatusesRequest): Promise<QueryTokenUpgradeStatusesResponse> {
    const data = QueryTokenUpgradeStatusesRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Query", "TokenUpgradeStatuses", data);
    return promise.then(data => QueryTokenUpgradeStatusesResponse.decode(new _m0.Reader(data)));
  }
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }
  frozenBalances(request: QueryFrozenBalancesRequest): Promise<QueryFrozenBalancesResponse> {
    const data = QueryFrozenBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Query", "FrozenBalances", data);
    return promise.then(data => QueryFrozenBalancesResponse.decode(new _m0.Reader(data)));
  }
  frozenBalance(request: QueryFrozenBalanceRequest): Promise<QueryFrozenBalanceResponse> {
    const data = QueryFrozenBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Query", "FrozenBalance", data);
    return promise.then(data => QueryFrozenBalanceResponse.decode(new _m0.Reader(data)));
  }
  whitelistedBalances(request: QueryWhitelistedBalancesRequest): Promise<QueryWhitelistedBalancesResponse> {
    const data = QueryWhitelistedBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Query", "WhitelistedBalances", data);
    return promise.then(data => QueryWhitelistedBalancesResponse.decode(new _m0.Reader(data)));
  }
  whitelistedBalance(request: QueryWhitelistedBalanceRequest): Promise<QueryWhitelistedBalanceResponse> {
    const data = QueryWhitelistedBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.ft.v1.Query", "WhitelistedBalance", data);
    return promise.then(data => QueryWhitelistedBalanceResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    tokens(request: QueryTokensRequest): Promise<QueryTokensResponse> {
      return queryService.tokens(request);
    },
    token(request: QueryTokenRequest): Promise<QueryTokenResponse> {
      return queryService.token(request);
    },
    tokenUpgradeStatuses(request: QueryTokenUpgradeStatusesRequest): Promise<QueryTokenUpgradeStatusesResponse> {
      return queryService.tokenUpgradeStatuses(request);
    },
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },
    frozenBalances(request: QueryFrozenBalancesRequest): Promise<QueryFrozenBalancesResponse> {
      return queryService.frozenBalances(request);
    },
    frozenBalance(request: QueryFrozenBalanceRequest): Promise<QueryFrozenBalanceResponse> {
      return queryService.frozenBalance(request);
    },
    whitelistedBalances(request: QueryWhitelistedBalancesRequest): Promise<QueryWhitelistedBalancesResponse> {
      return queryService.whitelistedBalances(request);
    },
    whitelistedBalance(request: QueryWhitelistedBalanceRequest): Promise<QueryWhitelistedBalanceResponse> {
      return queryService.whitelistedBalance(request);
    }
  };
};