import { Feature, featureFromJSON, featureToJSON } from "./token";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** MsgIssue defines message to issue new fungible token. */
export interface MsgIssue {
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  initialAmount: string;
  description: string;
  features: Feature[];
  /**
   * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * burn_amount. This value will be burnt on top of the send amount.
   */
  burnRate: string;
  /**
   * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * amount sent to the token issuer account.
   */
  sendCommissionRate: string;
}
export interface MsgIssueProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgIssue";
  value: Uint8Array;
}
/** MsgIssue defines message to issue new fungible token. */
export interface MsgIssueAmino {
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  initial_amount: string;
  description: string;
  features: Feature[];
  /**
   * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * burn_amount. This value will be burnt on top of the send amount.
   */
  burn_rate: string;
  /**
   * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * amount sent to the token issuer account.
   */
  send_commission_rate: string;
}
export interface MsgIssueAminoMsg {
  type: "/coreum.asset.ft.v1.MsgIssue";
  value: MsgIssueAmino;
}
/** MsgIssue defines message to issue new fungible token. */
export interface MsgIssueSDKType {
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  initial_amount: string;
  description: string;
  features: Feature[];
  burn_rate: string;
  send_commission_rate: string;
}
export interface MsgMint {
  sender: string;
  coin: Coin;
}
export interface MsgMintProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgMint";
  value: Uint8Array;
}
export interface MsgMintAmino {
  sender: string;
  coin?: CoinAmino;
}
export interface MsgMintAminoMsg {
  type: "/coreum.asset.ft.v1.MsgMint";
  value: MsgMintAmino;
}
export interface MsgMintSDKType {
  sender: string;
  coin: CoinSDKType;
}
export interface MsgBurn {
  sender: string;
  coin: Coin;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgBurn";
  value: Uint8Array;
}
export interface MsgBurnAmino {
  sender: string;
  coin?: CoinAmino;
}
export interface MsgBurnAminoMsg {
  type: "/coreum.asset.ft.v1.MsgBurn";
  value: MsgBurnAmino;
}
export interface MsgBurnSDKType {
  sender: string;
  coin: CoinSDKType;
}
export interface MsgFreeze {
  sender: string;
  account: string;
  coin: Coin;
}
export interface MsgFreezeProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgFreeze";
  value: Uint8Array;
}
export interface MsgFreezeAmino {
  sender: string;
  account: string;
  coin?: CoinAmino;
}
export interface MsgFreezeAminoMsg {
  type: "/coreum.asset.ft.v1.MsgFreeze";
  value: MsgFreezeAmino;
}
export interface MsgFreezeSDKType {
  sender: string;
  account: string;
  coin: CoinSDKType;
}
export interface MsgUnfreeze {
  sender: string;
  account: string;
  coin: Coin;
}
export interface MsgUnfreezeProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze";
  value: Uint8Array;
}
export interface MsgUnfreezeAmino {
  sender: string;
  account: string;
  coin?: CoinAmino;
}
export interface MsgUnfreezeAminoMsg {
  type: "/coreum.asset.ft.v1.MsgUnfreeze";
  value: MsgUnfreezeAmino;
}
export interface MsgUnfreezeSDKType {
  sender: string;
  account: string;
  coin: CoinSDKType;
}
export interface MsgGloballyFreeze {
  sender: string;
  denom: string;
}
export interface MsgGloballyFreezeProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze";
  value: Uint8Array;
}
export interface MsgGloballyFreezeAmino {
  sender: string;
  denom: string;
}
export interface MsgGloballyFreezeAminoMsg {
  type: "/coreum.asset.ft.v1.MsgGloballyFreeze";
  value: MsgGloballyFreezeAmino;
}
export interface MsgGloballyFreezeSDKType {
  sender: string;
  denom: string;
}
export interface MsgGloballyUnfreeze {
  sender: string;
  denom: string;
}
export interface MsgGloballyUnfreezeProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze";
  value: Uint8Array;
}
export interface MsgGloballyUnfreezeAmino {
  sender: string;
  denom: string;
}
export interface MsgGloballyUnfreezeAminoMsg {
  type: "/coreum.asset.ft.v1.MsgGloballyUnfreeze";
  value: MsgGloballyUnfreezeAmino;
}
export interface MsgGloballyUnfreezeSDKType {
  sender: string;
  denom: string;
}
export interface MsgSetWhitelistedLimit {
  sender: string;
  account: string;
  coin: Coin;
}
export interface MsgSetWhitelistedLimitProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit";
  value: Uint8Array;
}
export interface MsgSetWhitelistedLimitAmino {
  sender: string;
  account: string;
  coin?: CoinAmino;
}
export interface MsgSetWhitelistedLimitAminoMsg {
  type: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit";
  value: MsgSetWhitelistedLimitAmino;
}
export interface MsgSetWhitelistedLimitSDKType {
  sender: string;
  account: string;
  coin: CoinSDKType;
}
/** MsgUpgradeTokenV1 is the message upgrading token to V1. */
export interface MsgUpgradeTokenV1 {
  sender: string;
  denom: string;
  ibcEnabled: boolean;
}
export interface MsgUpgradeTokenV1ProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.MsgUpgradeTokenV1";
  value: Uint8Array;
}
/** MsgUpgradeTokenV1 is the message upgrading token to V1. */
export interface MsgUpgradeTokenV1Amino {
  sender: string;
  denom: string;
  ibc_enabled: boolean;
}
export interface MsgUpgradeTokenV1AminoMsg {
  type: "/coreum.asset.ft.v1.MsgUpgradeTokenV1";
  value: MsgUpgradeTokenV1Amino;
}
/** MsgUpgradeTokenV1 is the message upgrading token to V1. */
export interface MsgUpgradeTokenV1SDKType {
  sender: string;
  denom: string;
  ibc_enabled: boolean;
}
export interface EmptyResponse {}
export interface EmptyResponseProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.EmptyResponse";
  value: Uint8Array;
}
export interface EmptyResponseAmino {}
export interface EmptyResponseAminoMsg {
  type: "/coreum.asset.ft.v1.EmptyResponse";
  value: EmptyResponseAmino;
}
export interface EmptyResponseSDKType {}
function createBaseMsgIssue(): MsgIssue {
  return {
    issuer: "",
    symbol: "",
    subunit: "",
    precision: 0,
    initialAmount: "",
    description: "",
    features: [],
    burnRate: "",
    sendCommissionRate: ""
  };
}
export const MsgIssue = {
  encode(message: MsgIssue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.subunit !== "") {
      writer.uint32(26).string(message.subunit);
    }
    if (message.precision !== 0) {
      writer.uint32(32).uint32(message.precision);
    }
    if (message.initialAmount !== "") {
      writer.uint32(42).string(message.initialAmount);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    writer.uint32(58).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.burnRate !== "") {
      writer.uint32(66).string(message.burnRate);
    }
    if (message.sendCommissionRate !== "") {
      writer.uint32(74).string(message.sendCommissionRate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.subunit = reader.string();
          break;
        case 4:
          message.precision = reader.uint32();
          break;
        case 5:
          message.initialAmount = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.features.push((reader.int32() as any));
            }
          } else {
            message.features.push((reader.int32() as any));
          }
          break;
        case 8:
          message.burnRate = reader.string();
          break;
        case 9:
          message.sendCommissionRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgIssue>): MsgIssue {
    const message = createBaseMsgIssue();
    message.issuer = object.issuer ?? "";
    message.symbol = object.symbol ?? "";
    message.subunit = object.subunit ?? "";
    message.precision = object.precision ?? 0;
    message.initialAmount = object.initialAmount ?? "";
    message.description = object.description ?? "";
    message.features = object.features?.map(e => e) || [];
    message.burnRate = object.burnRate ?? "";
    message.sendCommissionRate = object.sendCommissionRate ?? "";
    return message;
  },
  fromAmino(object: MsgIssueAmino): MsgIssue {
    return {
      issuer: object.issuer,
      symbol: object.symbol,
      subunit: object.subunit,
      precision: object.precision,
      initialAmount: object.initial_amount,
      description: object.description,
      features: Array.isArray(object?.features) ? object.features.map((e: any) => featureFromJSON(e)) : [],
      burnRate: object.burn_rate,
      sendCommissionRate: object.send_commission_rate
    };
  },
  toAmino(message: MsgIssue): MsgIssueAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.symbol = message.symbol;
    obj.subunit = message.subunit;
    obj.precision = message.precision;
    obj.initial_amount = message.initialAmount;
    obj.description = message.description;
    if (message.features) {
      obj.features = message.features.map(e => featureToJSON(e));
    } else {
      obj.features = [];
    }
    obj.burn_rate = message.burnRate;
    obj.send_commission_rate = message.sendCommissionRate;
    return obj;
  },
  fromAminoMsg(object: MsgIssueAminoMsg): MsgIssue {
    return MsgIssue.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueProtoMsg): MsgIssue {
    return MsgIssue.decode(message.value);
  },
  toProto(message: MsgIssue): Uint8Array {
    return MsgIssue.encode(message).finish();
  },
  toProtoMsg(message: MsgIssue): MsgIssueProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgIssue",
      value: MsgIssue.encode(message).finish()
    };
  }
};
function createBaseMsgMint(): MsgMint {
  return {
    sender: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgMint = {
  encode(message: MsgMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.sender = object.sender ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    return {
      sender: object.sender,
      coin: object?.coin ? Coin.fromAmino(object.coin) : undefined
    };
  },
  toAmino(message: MsgMint): MsgMintAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMintAminoMsg): MsgMint {
    return MsgMint.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintProtoMsg): MsgMint {
    return MsgMint.decode(message.value);
  },
  toProto(message: MsgMint): Uint8Array {
    return MsgMint.encode(message).finish();
  },
  toProtoMsg(message: MsgMint): MsgMintProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    sender: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.sender = object.sender ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    return {
      sender: object.sender,
      coin: object?.coin ? Coin.fromAmino(object.coin) : undefined
    };
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
    return MsgBurn.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  }
};
function createBaseMsgFreeze(): MsgFreeze {
  return {
    sender: "",
    account: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgFreeze = {
  encode(message: MsgFreeze, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFreeze {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFreeze>): MsgFreeze {
    const message = createBaseMsgFreeze();
    message.sender = object.sender ?? "";
    message.account = object.account ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgFreezeAmino): MsgFreeze {
    return {
      sender: object.sender,
      account: object.account,
      coin: object?.coin ? Coin.fromAmino(object.coin) : undefined
    };
  },
  toAmino(message: MsgFreeze): MsgFreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.account = message.account;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgFreezeAminoMsg): MsgFreeze {
    return MsgFreeze.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFreezeProtoMsg): MsgFreeze {
    return MsgFreeze.decode(message.value);
  },
  toProto(message: MsgFreeze): Uint8Array {
    return MsgFreeze.encode(message).finish();
  },
  toProtoMsg(message: MsgFreeze): MsgFreezeProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
      value: MsgFreeze.encode(message).finish()
    };
  }
};
function createBaseMsgUnfreeze(): MsgUnfreeze {
  return {
    sender: "",
    account: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgUnfreeze = {
  encode(message: MsgUnfreeze, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfreeze {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnfreeze>): MsgUnfreeze {
    const message = createBaseMsgUnfreeze();
    message.sender = object.sender ?? "";
    message.account = object.account ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgUnfreezeAmino): MsgUnfreeze {
    return {
      sender: object.sender,
      account: object.account,
      coin: object?.coin ? Coin.fromAmino(object.coin) : undefined
    };
  },
  toAmino(message: MsgUnfreeze): MsgUnfreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.account = message.account;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnfreezeAminoMsg): MsgUnfreeze {
    return MsgUnfreeze.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnfreezeProtoMsg): MsgUnfreeze {
    return MsgUnfreeze.decode(message.value);
  },
  toProto(message: MsgUnfreeze): Uint8Array {
    return MsgUnfreeze.encode(message).finish();
  },
  toProtoMsg(message: MsgUnfreeze): MsgUnfreezeProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
      value: MsgUnfreeze.encode(message).finish()
    };
  }
};
function createBaseMsgGloballyFreeze(): MsgGloballyFreeze {
  return {
    sender: "",
    denom: ""
  };
}
export const MsgGloballyFreeze = {
  encode(message: MsgGloballyFreeze, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGloballyFreeze {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGloballyFreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgGloballyFreeze>): MsgGloballyFreeze {
    const message = createBaseMsgGloballyFreeze();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgGloballyFreezeAmino): MsgGloballyFreeze {
    return {
      sender: object.sender,
      denom: object.denom
    };
  },
  toAmino(message: MsgGloballyFreeze): MsgGloballyFreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgGloballyFreezeAminoMsg): MsgGloballyFreeze {
    return MsgGloballyFreeze.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGloballyFreezeProtoMsg): MsgGloballyFreeze {
    return MsgGloballyFreeze.decode(message.value);
  },
  toProto(message: MsgGloballyFreeze): Uint8Array {
    return MsgGloballyFreeze.encode(message).finish();
  },
  toProtoMsg(message: MsgGloballyFreeze): MsgGloballyFreezeProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
      value: MsgGloballyFreeze.encode(message).finish()
    };
  }
};
function createBaseMsgGloballyUnfreeze(): MsgGloballyUnfreeze {
  return {
    sender: "",
    denom: ""
  };
}
export const MsgGloballyUnfreeze = {
  encode(message: MsgGloballyUnfreeze, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGloballyUnfreeze {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGloballyUnfreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgGloballyUnfreeze>): MsgGloballyUnfreeze {
    const message = createBaseMsgGloballyUnfreeze();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgGloballyUnfreezeAmino): MsgGloballyUnfreeze {
    return {
      sender: object.sender,
      denom: object.denom
    };
  },
  toAmino(message: MsgGloballyUnfreeze): MsgGloballyUnfreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgGloballyUnfreezeAminoMsg): MsgGloballyUnfreeze {
    return MsgGloballyUnfreeze.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGloballyUnfreezeProtoMsg): MsgGloballyUnfreeze {
    return MsgGloballyUnfreeze.decode(message.value);
  },
  toProto(message: MsgGloballyUnfreeze): Uint8Array {
    return MsgGloballyUnfreeze.encode(message).finish();
  },
  toProtoMsg(message: MsgGloballyUnfreeze): MsgGloballyUnfreezeProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
      value: MsgGloballyUnfreeze.encode(message).finish()
    };
  }
};
function createBaseMsgSetWhitelistedLimit(): MsgSetWhitelistedLimit {
  return {
    sender: "",
    account: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgSetWhitelistedLimit = {
  encode(message: MsgSetWhitelistedLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWhitelistedLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWhitelistedLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetWhitelistedLimit>): MsgSetWhitelistedLimit {
    const message = createBaseMsgSetWhitelistedLimit();
    message.sender = object.sender ?? "";
    message.account = object.account ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgSetWhitelistedLimitAmino): MsgSetWhitelistedLimit {
    return {
      sender: object.sender,
      account: object.account,
      coin: object?.coin ? Coin.fromAmino(object.coin) : undefined
    };
  },
  toAmino(message: MsgSetWhitelistedLimit): MsgSetWhitelistedLimitAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.account = message.account;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetWhitelistedLimitAminoMsg): MsgSetWhitelistedLimit {
    return MsgSetWhitelistedLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetWhitelistedLimitProtoMsg): MsgSetWhitelistedLimit {
    return MsgSetWhitelistedLimit.decode(message.value);
  },
  toProto(message: MsgSetWhitelistedLimit): Uint8Array {
    return MsgSetWhitelistedLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgSetWhitelistedLimit): MsgSetWhitelistedLimitProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
      value: MsgSetWhitelistedLimit.encode(message).finish()
    };
  }
};
function createBaseMsgUpgradeTokenV1(): MsgUpgradeTokenV1 {
  return {
    sender: "",
    denom: "",
    ibcEnabled: false
  };
}
export const MsgUpgradeTokenV1 = {
  encode(message: MsgUpgradeTokenV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.ibcEnabled === true) {
      writer.uint32(24).bool(message.ibcEnabled);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeTokenV1 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeTokenV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.ibcEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpgradeTokenV1>): MsgUpgradeTokenV1 {
    const message = createBaseMsgUpgradeTokenV1();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.ibcEnabled = object.ibcEnabled ?? false;
    return message;
  },
  fromAmino(object: MsgUpgradeTokenV1Amino): MsgUpgradeTokenV1 {
    return {
      sender: object.sender,
      denom: object.denom,
      ibcEnabled: object.ibc_enabled
    };
  },
  toAmino(message: MsgUpgradeTokenV1): MsgUpgradeTokenV1Amino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom = message.denom;
    obj.ibc_enabled = message.ibcEnabled;
    return obj;
  },
  fromAminoMsg(object: MsgUpgradeTokenV1AminoMsg): MsgUpgradeTokenV1 {
    return MsgUpgradeTokenV1.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpgradeTokenV1ProtoMsg): MsgUpgradeTokenV1 {
    return MsgUpgradeTokenV1.decode(message.value);
  },
  toProto(message: MsgUpgradeTokenV1): Uint8Array {
    return MsgUpgradeTokenV1.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradeTokenV1): MsgUpgradeTokenV1ProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgUpgradeTokenV1",
      value: MsgUpgradeTokenV1.encode(message).finish()
    };
  }
};
function createBaseEmptyResponse(): EmptyResponse {
  return {};
}
export const EmptyResponse = {
  encode(_: EmptyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EmptyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<EmptyResponse>): EmptyResponse {
    const message = createBaseEmptyResponse();
    return message;
  },
  fromAmino(_: EmptyResponseAmino): EmptyResponse {
    return {};
  },
  toAmino(_: EmptyResponse): EmptyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: EmptyResponseAminoMsg): EmptyResponse {
    return EmptyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EmptyResponseProtoMsg): EmptyResponse {
    return EmptyResponse.decode(message.value);
  },
  toProto(message: EmptyResponse): Uint8Array {
    return EmptyResponse.encode(message).finish();
  },
  toProtoMsg(message: EmptyResponse): EmptyResponseProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.EmptyResponse",
      value: EmptyResponse.encode(message).finish()
    };
  }
};