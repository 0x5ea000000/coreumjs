import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../../helpers";
/** Feature defines possible features of fungible token. */
export enum Feature {
  minting = 0,
  burning = 1,
  freezing = 2,
  whitelisting = 3,
  ibc = 4,
  UNRECOGNIZED = -1,
}
export const FeatureSDKType = Feature;
export const FeatureAmino = Feature;
export function featureFromJSON(object: any): Feature {
  switch (object) {
    case 0:
    case "minting":
      return Feature.minting;
    case 1:
    case "burning":
      return Feature.burning;
    case 2:
    case "freezing":
      return Feature.freezing;
    case 3:
    case "whitelisting":
      return Feature.whitelisting;
    case 4:
    case "ibc":
      return Feature.ibc;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Feature.UNRECOGNIZED;
  }
}
export function featureToJSON(object: Feature): string {
  switch (object) {
    case Feature.minting:
      return "minting";
    case Feature.burning:
      return "burning";
    case Feature.freezing:
      return "freezing";
    case Feature.whitelisting:
      return "whitelisting";
    case Feature.ibc:
      return "ibc";
    case Feature.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Definition defines the fungible token settings to store. */
export interface Definition {
  denom: string;
  issuer: string;
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
  version: number;
}
export interface DefinitionProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.Definition";
  value: Uint8Array;
}
/** Definition defines the fungible token settings to store. */
export interface DefinitionAmino {
  denom: string;
  issuer: string;
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
  version: number;
}
export interface DefinitionAminoMsg {
  type: "/coreum.asset.ft.v1.Definition";
  value: DefinitionAmino;
}
/** Definition defines the fungible token settings to store. */
export interface DefinitionSDKType {
  denom: string;
  issuer: string;
  features: Feature[];
  burn_rate: string;
  send_commission_rate: string;
  version: number;
}
/** Token is a full representation of the fungible token. */
export interface Token {
  denom: string;
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  description: string;
  globallyFrozen: boolean;
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
  version: number;
}
export interface TokenProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.Token";
  value: Uint8Array;
}
/** Token is a full representation of the fungible token. */
export interface TokenAmino {
  denom: string;
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  description: string;
  globally_frozen: boolean;
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
  version: number;
}
export interface TokenAminoMsg {
  type: "/coreum.asset.ft.v1.Token";
  value: TokenAmino;
}
/** Token is a full representation of the fungible token. */
export interface TokenSDKType {
  denom: string;
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  description: string;
  globally_frozen: boolean;
  features: Feature[];
  burn_rate: string;
  send_commission_rate: string;
  version: number;
}
/** DelayedTokenUpgradeV1 is executed by the delay module when it's time to enable IBC. */
export interface DelayedTokenUpgradeV1 {
  denom: string;
}
export interface DelayedTokenUpgradeV1ProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.DelayedTokenUpgradeV1";
  value: Uint8Array;
}
/** DelayedTokenUpgradeV1 is executed by the delay module when it's time to enable IBC. */
export interface DelayedTokenUpgradeV1Amino {
  denom: string;
}
export interface DelayedTokenUpgradeV1AminoMsg {
  type: "/coreum.asset.ft.v1.DelayedTokenUpgradeV1";
  value: DelayedTokenUpgradeV1Amino;
}
/** DelayedTokenUpgradeV1 is executed by the delay module when it's time to enable IBC. */
export interface DelayedTokenUpgradeV1SDKType {
  denom: string;
}
/** TokenUpgradeV1Status defines the current status of the v1 token migration. */
export interface TokenUpgradeV1Status {
  ibcEnabled: boolean;
  startTime: Date;
  endTime: Date;
}
export interface TokenUpgradeV1StatusProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.TokenUpgradeV1Status";
  value: Uint8Array;
}
/** TokenUpgradeV1Status defines the current status of the v1 token migration. */
export interface TokenUpgradeV1StatusAmino {
  ibc_enabled: boolean;
  start_time?: Date;
  end_time?: Date;
}
export interface TokenUpgradeV1StatusAminoMsg {
  type: "/coreum.asset.ft.v1.TokenUpgradeV1Status";
  value: TokenUpgradeV1StatusAmino;
}
/** TokenUpgradeV1Status defines the current status of the v1 token migration. */
export interface TokenUpgradeV1StatusSDKType {
  ibc_enabled: boolean;
  start_time: Date;
  end_time: Date;
}
/** TokenUpgradeStatuses defines all statuses of the token migrations. */
export interface TokenUpgradeStatuses {
  v1: TokenUpgradeV1Status;
}
export interface TokenUpgradeStatusesProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.TokenUpgradeStatuses";
  value: Uint8Array;
}
/** TokenUpgradeStatuses defines all statuses of the token migrations. */
export interface TokenUpgradeStatusesAmino {
  v1?: TokenUpgradeV1StatusAmino;
}
export interface TokenUpgradeStatusesAminoMsg {
  type: "/coreum.asset.ft.v1.TokenUpgradeStatuses";
  value: TokenUpgradeStatusesAmino;
}
/** TokenUpgradeStatuses defines all statuses of the token migrations. */
export interface TokenUpgradeStatusesSDKType {
  v1: TokenUpgradeV1StatusSDKType;
}
function createBaseDefinition(): Definition {
  return {
    denom: "",
    issuer: "",
    features: [],
    burnRate: "",
    sendCommissionRate: "",
    version: 0
  };
}
export const Definition = {
  encode(message: Definition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    writer.uint32(26).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.burnRate !== "") {
      writer.uint32(34).string(message.burnRate);
    }
    if (message.sendCommissionRate !== "") {
      writer.uint32(42).string(message.sendCommissionRate);
    }
    if (message.version !== 0) {
      writer.uint32(48).uint32(message.version);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Definition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.features.push((reader.int32() as any));
            }
          } else {
            message.features.push((reader.int32() as any));
          }
          break;
        case 4:
          message.burnRate = reader.string();
          break;
        case 5:
          message.sendCommissionRate = reader.string();
          break;
        case 6:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Definition>): Definition {
    const message = createBaseDefinition();
    message.denom = object.denom ?? "";
    message.issuer = object.issuer ?? "";
    message.features = object.features?.map(e => e) || [];
    message.burnRate = object.burnRate ?? "";
    message.sendCommissionRate = object.sendCommissionRate ?? "";
    message.version = object.version ?? 0;
    return message;
  },
  fromAmino(object: DefinitionAmino): Definition {
    return {
      denom: object.denom,
      issuer: object.issuer,
      features: Array.isArray(object?.features) ? object.features.map((e: any) => featureFromJSON(e)) : [],
      burnRate: object.burn_rate,
      sendCommissionRate: object.send_commission_rate,
      version: object.version
    };
  },
  toAmino(message: Definition): DefinitionAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.issuer = message.issuer;
    if (message.features) {
      obj.features = message.features.map(e => featureToJSON(e));
    } else {
      obj.features = [];
    }
    obj.burn_rate = message.burnRate;
    obj.send_commission_rate = message.sendCommissionRate;
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: DefinitionAminoMsg): Definition {
    return Definition.fromAmino(object.value);
  },
  fromProtoMsg(message: DefinitionProtoMsg): Definition {
    return Definition.decode(message.value);
  },
  toProto(message: Definition): Uint8Array {
    return Definition.encode(message).finish();
  },
  toProtoMsg(message: Definition): DefinitionProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.Definition",
      value: Definition.encode(message).finish()
    };
  }
};
function createBaseToken(): Token {
  return {
    denom: "",
    issuer: "",
    symbol: "",
    subunit: "",
    precision: 0,
    description: "",
    globallyFrozen: false,
    features: [],
    burnRate: "",
    sendCommissionRate: "",
    version: 0
  };
}
export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.subunit !== "") {
      writer.uint32(34).string(message.subunit);
    }
    if (message.precision !== 0) {
      writer.uint32(40).uint32(message.precision);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.globallyFrozen === true) {
      writer.uint32(56).bool(message.globallyFrozen);
    }
    writer.uint32(66).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.burnRate !== "") {
      writer.uint32(74).string(message.burnRate);
    }
    if (message.sendCommissionRate !== "") {
      writer.uint32(82).string(message.sendCommissionRate);
    }
    if (message.version !== 0) {
      writer.uint32(88).uint32(message.version);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.subunit = reader.string();
          break;
        case 5:
          message.precision = reader.uint32();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.globallyFrozen = reader.bool();
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.features.push((reader.int32() as any));
            }
          } else {
            message.features.push((reader.int32() as any));
          }
          break;
        case 9:
          message.burnRate = reader.string();
          break;
        case 10:
          message.sendCommissionRate = reader.string();
          break;
        case 11:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Token>): Token {
    const message = createBaseToken();
    message.denom = object.denom ?? "";
    message.issuer = object.issuer ?? "";
    message.symbol = object.symbol ?? "";
    message.subunit = object.subunit ?? "";
    message.precision = object.precision ?? 0;
    message.description = object.description ?? "";
    message.globallyFrozen = object.globallyFrozen ?? false;
    message.features = object.features?.map(e => e) || [];
    message.burnRate = object.burnRate ?? "";
    message.sendCommissionRate = object.sendCommissionRate ?? "";
    message.version = object.version ?? 0;
    return message;
  },
  fromAmino(object: TokenAmino): Token {
    return {
      denom: object.denom,
      issuer: object.issuer,
      symbol: object.symbol,
      subunit: object.subunit,
      precision: object.precision,
      description: object.description,
      globallyFrozen: object.globally_frozen,
      features: Array.isArray(object?.features) ? object.features.map((e: any) => featureFromJSON(e)) : [],
      burnRate: object.burn_rate,
      sendCommissionRate: object.send_commission_rate,
      version: object.version
    };
  },
  toAmino(message: Token): TokenAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.issuer = message.issuer;
    obj.symbol = message.symbol;
    obj.subunit = message.subunit;
    obj.precision = message.precision;
    obj.description = message.description;
    obj.globally_frozen = message.globallyFrozen;
    if (message.features) {
      obj.features = message.features.map(e => featureToJSON(e));
    } else {
      obj.features = [];
    }
    obj.burn_rate = message.burnRate;
    obj.send_commission_rate = message.sendCommissionRate;
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: TokenAminoMsg): Token {
    return Token.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenProtoMsg): Token {
    return Token.decode(message.value);
  },
  toProto(message: Token): Uint8Array {
    return Token.encode(message).finish();
  },
  toProtoMsg(message: Token): TokenProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.Token",
      value: Token.encode(message).finish()
    };
  }
};
function createBaseDelayedTokenUpgradeV1(): DelayedTokenUpgradeV1 {
  return {
    denom: ""
  };
}
export const DelayedTokenUpgradeV1 = {
  encode(message: DelayedTokenUpgradeV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelayedTokenUpgradeV1 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedTokenUpgradeV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DelayedTokenUpgradeV1>): DelayedTokenUpgradeV1 {
    const message = createBaseDelayedTokenUpgradeV1();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: DelayedTokenUpgradeV1Amino): DelayedTokenUpgradeV1 {
    return {
      denom: object.denom
    };
  },
  toAmino(message: DelayedTokenUpgradeV1): DelayedTokenUpgradeV1Amino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: DelayedTokenUpgradeV1AminoMsg): DelayedTokenUpgradeV1 {
    return DelayedTokenUpgradeV1.fromAmino(object.value);
  },
  fromProtoMsg(message: DelayedTokenUpgradeV1ProtoMsg): DelayedTokenUpgradeV1 {
    return DelayedTokenUpgradeV1.decode(message.value);
  },
  toProto(message: DelayedTokenUpgradeV1): Uint8Array {
    return DelayedTokenUpgradeV1.encode(message).finish();
  },
  toProtoMsg(message: DelayedTokenUpgradeV1): DelayedTokenUpgradeV1ProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.DelayedTokenUpgradeV1",
      value: DelayedTokenUpgradeV1.encode(message).finish()
    };
  }
};
function createBaseTokenUpgradeV1Status(): TokenUpgradeV1Status {
  return {
    ibcEnabled: false,
    startTime: new Date(),
    endTime: new Date()
  };
}
export const TokenUpgradeV1Status = {
  encode(message: TokenUpgradeV1Status, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ibcEnabled === true) {
      writer.uint32(8).bool(message.ibcEnabled);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenUpgradeV1Status {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenUpgradeV1Status();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ibcEnabled = reader.bool();
          break;
        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TokenUpgradeV1Status>): TokenUpgradeV1Status {
    const message = createBaseTokenUpgradeV1Status();
    message.ibcEnabled = object.ibcEnabled ?? false;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
  fromAmino(object: TokenUpgradeV1StatusAmino): TokenUpgradeV1Status {
    return {
      ibcEnabled: object.ibc_enabled,
      startTime: object.start_time,
      endTime: object.end_time
    };
  },
  toAmino(message: TokenUpgradeV1Status): TokenUpgradeV1StatusAmino {
    const obj: any = {};
    obj.ibc_enabled = message.ibcEnabled;
    obj.start_time = message.startTime;
    obj.end_time = message.endTime;
    return obj;
  },
  fromAminoMsg(object: TokenUpgradeV1StatusAminoMsg): TokenUpgradeV1Status {
    return TokenUpgradeV1Status.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenUpgradeV1StatusProtoMsg): TokenUpgradeV1Status {
    return TokenUpgradeV1Status.decode(message.value);
  },
  toProto(message: TokenUpgradeV1Status): Uint8Array {
    return TokenUpgradeV1Status.encode(message).finish();
  },
  toProtoMsg(message: TokenUpgradeV1Status): TokenUpgradeV1StatusProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.TokenUpgradeV1Status",
      value: TokenUpgradeV1Status.encode(message).finish()
    };
  }
};
function createBaseTokenUpgradeStatuses(): TokenUpgradeStatuses {
  return {
    v1: TokenUpgradeV1Status.fromPartial({})
  };
}
export const TokenUpgradeStatuses = {
  encode(message: TokenUpgradeStatuses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.v1 !== undefined) {
      TokenUpgradeV1Status.encode(message.v1, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenUpgradeStatuses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenUpgradeStatuses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v1 = TokenUpgradeV1Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TokenUpgradeStatuses>): TokenUpgradeStatuses {
    const message = createBaseTokenUpgradeStatuses();
    message.v1 = object.v1 !== undefined && object.v1 !== null ? TokenUpgradeV1Status.fromPartial(object.v1) : undefined;
    return message;
  },
  fromAmino(object: TokenUpgradeStatusesAmino): TokenUpgradeStatuses {
    return {
      v1: object?.v1 ? TokenUpgradeV1Status.fromAmino(object.v1) : undefined
    };
  },
  toAmino(message: TokenUpgradeStatuses): TokenUpgradeStatusesAmino {
    const obj: any = {};
    obj.v1 = message.v1 ? TokenUpgradeV1Status.toAmino(message.v1) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenUpgradeStatusesAminoMsg): TokenUpgradeStatuses {
    return TokenUpgradeStatuses.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenUpgradeStatusesProtoMsg): TokenUpgradeStatuses {
    return TokenUpgradeStatuses.decode(message.value);
  },
  toProto(message: TokenUpgradeStatuses): Uint8Array {
    return TokenUpgradeStatuses.encode(message).finish();
  },
  toProtoMsg(message: TokenUpgradeStatuses): TokenUpgradeStatusesProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.TokenUpgradeStatuses",
      value: TokenUpgradeStatuses.encode(message).finish()
    };
  }
};