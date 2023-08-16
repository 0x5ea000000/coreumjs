import { Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse, QueryFrozenRequest, QueryFrozenResponse, QueryWhitelistedRequest, QueryWhitelistedResponse, QueryWhitelistedAccountsForNFTRequest, QueryWhitelistedAccountsForNFTResponse, QueryBurntNFTRequest, QueryBurntNFTResponse, QueryBurntNFTsInClassRequest, QueryBurntNFTsInClassResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/asset/nft module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Class queries the non-fungible token class of the module. */
  class(request: QueryClassRequest): Promise<QueryClassResponse>;
  /** Classes queries the non-fungible token classes of the module. */
  classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
  /** Frozen queries to check if an NFT is frozen or not. */
  frozen(request: QueryFrozenRequest): Promise<QueryFrozenResponse>;
  /** Whitelisted queries to check if an account is whitelited to hold an NFT or not. */
  whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse>;
  /** WhitelistedAccountsForNFT returns the list of accounts which are whitelisted to hold this NFT. */
  whitelistedAccountsForNFT(request: QueryWhitelistedAccountsForNFTRequest): Promise<QueryWhitelistedAccountsForNFTResponse>;
  /** BurntNFTsInClass checks if an nft if is in burnt NFTs list. */
  burntNFT(request: QueryBurntNFTRequest): Promise<QueryBurntNFTResponse>;
  /** BurntNFTsInClass returns the list of burnt nfts in a class. */
  burntNFTsInClass(request: QueryBurntNFTsInClassRequest): Promise<QueryBurntNFTsInClassResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.class = this.class.bind(this);
    this.classes = this.classes.bind(this);
    this.frozen = this.frozen.bind(this);
    this.whitelisted = this.whitelisted.bind(this);
    this.whitelistedAccountsForNFT = this.whitelistedAccountsForNFT.bind(this);
    this.burntNFT = this.burntNFT.bind(this);
    this.burntNFTsInClass = this.burntNFTsInClass.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  class(request: QueryClassRequest): Promise<QueryClassResponse> {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "Class", data);
    return promise.then(data => QueryClassResponse.decode(new _m0.Reader(data)));
  }
  classes(request: QueryClassesRequest): Promise<QueryClassesResponse> {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "Classes", data);
    return promise.then(data => QueryClassesResponse.decode(new _m0.Reader(data)));
  }
  frozen(request: QueryFrozenRequest): Promise<QueryFrozenResponse> {
    const data = QueryFrozenRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "Frozen", data);
    return promise.then(data => QueryFrozenResponse.decode(new _m0.Reader(data)));
  }
  whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse> {
    const data = QueryWhitelistedRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "Whitelisted", data);
    return promise.then(data => QueryWhitelistedResponse.decode(new _m0.Reader(data)));
  }
  whitelistedAccountsForNFT(request: QueryWhitelistedAccountsForNFTRequest): Promise<QueryWhitelistedAccountsForNFTResponse> {
    const data = QueryWhitelistedAccountsForNFTRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "WhitelistedAccountsForNFT", data);
    return promise.then(data => QueryWhitelistedAccountsForNFTResponse.decode(new _m0.Reader(data)));
  }
  burntNFT(request: QueryBurntNFTRequest): Promise<QueryBurntNFTResponse> {
    const data = QueryBurntNFTRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "BurntNFT", data);
    return promise.then(data => QueryBurntNFTResponse.decode(new _m0.Reader(data)));
  }
  burntNFTsInClass(request: QueryBurntNFTsInClassRequest): Promise<QueryBurntNFTsInClassResponse> {
    const data = QueryBurntNFTsInClassRequest.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Query", "BurntNFTsInClass", data);
    return promise.then(data => QueryBurntNFTsInClassResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    class(request: QueryClassRequest): Promise<QueryClassResponse> {
      return queryService.class(request);
    },
    classes(request: QueryClassesRequest): Promise<QueryClassesResponse> {
      return queryService.classes(request);
    },
    frozen(request: QueryFrozenRequest): Promise<QueryFrozenResponse> {
      return queryService.frozen(request);
    },
    whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse> {
      return queryService.whitelisted(request);
    },
    whitelistedAccountsForNFT(request: QueryWhitelistedAccountsForNFTRequest): Promise<QueryWhitelistedAccountsForNFTResponse> {
      return queryService.whitelistedAccountsForNFT(request);
    },
    burntNFT(request: QueryBurntNFTRequest): Promise<QueryBurntNFTResponse> {
      return queryService.burntNFT(request);
    },
    burntNFTsInClass(request: QueryBurntNFTsInClassRequest): Promise<QueryBurntNFTsInClassResponse> {
      return queryService.burntNFTsInClass(request);
    }
  };
};