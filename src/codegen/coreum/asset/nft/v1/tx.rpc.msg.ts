import { Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgIssueClass, EmptyResponse, MsgMint, MsgBurn, MsgFreeze, MsgUnfreeze, MsgAddToWhitelist, MsgRemoveFromWhitelist } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** IssueClass creates new non-fungible token class. */
  issueClass(request: MsgIssueClass): Promise<EmptyResponse>;
  /** Mint mints new non-fungible token in the class. */
  mint(request: MsgMint): Promise<EmptyResponse>;
  /** Burn burns the existing non-fungible token in the class. */
  burn(request: MsgBurn): Promise<EmptyResponse>;
  /** Freeze freezes an NFT */
  freeze(request: MsgFreeze): Promise<EmptyResponse>;
  /** Unfreeze removes the freeze effect already put on an NFT */
  unfreeze(request: MsgUnfreeze): Promise<EmptyResponse>;
  /** AddToWhitelist sets the account as whitelisted to hold the NFT */
  addToWhitelist(request: MsgAddToWhitelist): Promise<EmptyResponse>;
  /** RemoveFromWhitelist removes an account from whitelisted list of the NFT */
  removeFromWhitelist(request: MsgRemoveFromWhitelist): Promise<EmptyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.issueClass = this.issueClass.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.freeze = this.freeze.bind(this);
    this.unfreeze = this.unfreeze.bind(this);
    this.addToWhitelist = this.addToWhitelist.bind(this);
    this.removeFromWhitelist = this.removeFromWhitelist.bind(this);
  }
  issueClass(request: MsgIssueClass): Promise<EmptyResponse> {
    const data = MsgIssueClass.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "IssueClass", data);
    return promise.then(data => EmptyResponse.decode(new _m0.Reader(data)));
  }
  mint(request: MsgMint): Promise<EmptyResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "Mint", data);
    return promise.then(data => EmptyResponse.decode(new _m0.Reader(data)));
  }
  burn(request: MsgBurn): Promise<EmptyResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "Burn", data);
    return promise.then(data => EmptyResponse.decode(new _m0.Reader(data)));
  }
  freeze(request: MsgFreeze): Promise<EmptyResponse> {
    const data = MsgFreeze.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "Freeze", data);
    return promise.then(data => EmptyResponse.decode(new _m0.Reader(data)));
  }
  unfreeze(request: MsgUnfreeze): Promise<EmptyResponse> {
    const data = MsgUnfreeze.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "Unfreeze", data);
    return promise.then(data => EmptyResponse.decode(new _m0.Reader(data)));
  }
  addToWhitelist(request: MsgAddToWhitelist): Promise<EmptyResponse> {
    const data = MsgAddToWhitelist.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "AddToWhitelist", data);
    return promise.then(data => EmptyResponse.decode(new _m0.Reader(data)));
  }
  removeFromWhitelist(request: MsgRemoveFromWhitelist): Promise<EmptyResponse> {
    const data = MsgRemoveFromWhitelist.encode(request).finish();
    const promise = this.rpc.request("coreum.asset.nft.v1.Msg", "RemoveFromWhitelist", data);
    return promise.then(data => EmptyResponse.decode(new _m0.Reader(data)));
  }
}