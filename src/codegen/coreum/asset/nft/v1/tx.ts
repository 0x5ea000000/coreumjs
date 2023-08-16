import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { ClassFeature, classFeatureFromJSON, classFeatureToJSON } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** MsgIssueClass defines message for the IssueClass method. */
export interface MsgIssueClass {
  issuer: string;
  symbol: string;
  name: string;
  description: string;
  uri: string;
  uriHash: string;
  data: Any;
  features: ClassFeature[];
  royaltyRate: string;
}
export interface MsgIssueClassProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgIssueClass";
  value: Uint8Array;
}
/** MsgIssueClass defines message for the IssueClass method. */
export interface MsgIssueClassAmino {
  issuer: string;
  symbol: string;
  name: string;
  description: string;
  uri: string;
  uri_hash: string;
  data?: AnyAmino;
  features: ClassFeature[];
  royalty_rate: string;
}
export interface MsgIssueClassAminoMsg {
  type: "/coreum.asset.nft.v1.MsgIssueClass";
  value: MsgIssueClassAmino;
}
/** MsgIssueClass defines message for the IssueClass method. */
export interface MsgIssueClassSDKType {
  issuer: string;
  symbol: string;
  name: string;
  description: string;
  uri: string;
  uri_hash: string;
  data: AnySDKType;
  features: ClassFeature[];
  royalty_rate: string;
}
/** MsgMint defines message for the Mint method. */
export interface MsgMint {
  sender: string;
  classId: string;
  id: string;
  uri: string;
  uriHash: string;
  data: Any;
}
export interface MsgMintProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgMint";
  value: Uint8Array;
}
/** MsgMint defines message for the Mint method. */
export interface MsgMintAmino {
  sender: string;
  class_id: string;
  id: string;
  uri: string;
  uri_hash: string;
  data?: AnyAmino;
}
export interface MsgMintAminoMsg {
  type: "/coreum.asset.nft.v1.MsgMint";
  value: MsgMintAmino;
}
/** MsgMint defines message for the Mint method. */
export interface MsgMintSDKType {
  sender: string;
  class_id: string;
  id: string;
  uri: string;
  uri_hash: string;
  data: AnySDKType;
}
/** MsgBurn defines message for the Burn method. */
export interface MsgBurn {
  sender: string;
  classId: string;
  id: string;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgBurn";
  value: Uint8Array;
}
/** MsgBurn defines message for the Burn method. */
export interface MsgBurnAmino {
  sender: string;
  class_id: string;
  id: string;
}
export interface MsgBurnAminoMsg {
  type: "/coreum.asset.nft.v1.MsgBurn";
  value: MsgBurnAmino;
}
/** MsgBurn defines message for the Burn method. */
export interface MsgBurnSDKType {
  sender: string;
  class_id: string;
  id: string;
}
export interface MsgFreeze {
  sender: string;
  classId: string;
  id: string;
}
export interface MsgFreezeProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgFreeze";
  value: Uint8Array;
}
export interface MsgFreezeAmino {
  sender: string;
  class_id: string;
  id: string;
}
export interface MsgFreezeAminoMsg {
  type: "/coreum.asset.nft.v1.MsgFreeze";
  value: MsgFreezeAmino;
}
export interface MsgFreezeSDKType {
  sender: string;
  class_id: string;
  id: string;
}
export interface MsgUnfreeze {
  sender: string;
  classId: string;
  id: string;
}
export interface MsgUnfreezeProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze";
  value: Uint8Array;
}
export interface MsgUnfreezeAmino {
  sender: string;
  class_id: string;
  id: string;
}
export interface MsgUnfreezeAminoMsg {
  type: "/coreum.asset.nft.v1.MsgUnfreeze";
  value: MsgUnfreezeAmino;
}
export interface MsgUnfreezeSDKType {
  sender: string;
  class_id: string;
  id: string;
}
export interface MsgAddToWhitelist {
  sender: string;
  classId: string;
  id: string;
  account: string;
}
export interface MsgAddToWhitelistProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist";
  value: Uint8Array;
}
export interface MsgAddToWhitelistAmino {
  sender: string;
  class_id: string;
  id: string;
  account: string;
}
export interface MsgAddToWhitelistAminoMsg {
  type: "/coreum.asset.nft.v1.MsgAddToWhitelist";
  value: MsgAddToWhitelistAmino;
}
export interface MsgAddToWhitelistSDKType {
  sender: string;
  class_id: string;
  id: string;
  account: string;
}
export interface MsgRemoveFromWhitelist {
  sender: string;
  classId: string;
  id: string;
  account: string;
}
export interface MsgRemoveFromWhitelistProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist";
  value: Uint8Array;
}
export interface MsgRemoveFromWhitelistAmino {
  sender: string;
  class_id: string;
  id: string;
  account: string;
}
export interface MsgRemoveFromWhitelistAminoMsg {
  type: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist";
  value: MsgRemoveFromWhitelistAmino;
}
export interface MsgRemoveFromWhitelistSDKType {
  sender: string;
  class_id: string;
  id: string;
  account: string;
}
export interface EmptyResponse {}
export interface EmptyResponseProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EmptyResponse";
  value: Uint8Array;
}
export interface EmptyResponseAmino {}
export interface EmptyResponseAminoMsg {
  type: "/coreum.asset.nft.v1.EmptyResponse";
  value: EmptyResponseAmino;
}
export interface EmptyResponseSDKType {}
function createBaseMsgIssueClass(): MsgIssueClass {
  return {
    issuer: "",
    symbol: "",
    name: "",
    description: "",
    uri: "",
    uriHash: "",
    data: Any.fromPartial({}),
    features: [],
    royaltyRate: ""
  };
}
export const MsgIssueClass = {
  encode(message: MsgIssueClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(66).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.royaltyRate !== "") {
      writer.uint32(74).string(message.royaltyRate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueClass();
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
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        case 7:
          message.data = Any.decode(reader, reader.uint32());
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
          message.royaltyRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgIssueClass>): MsgIssueClass {
    const message = createBaseMsgIssueClass();
    message.issuer = object.issuer ?? "";
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    message.features = object.features?.map(e => e) || [];
    message.royaltyRate = object.royaltyRate ?? "";
    return message;
  },
  fromAmino(object: MsgIssueClassAmino): MsgIssueClass {
    return {
      issuer: object.issuer,
      symbol: object.symbol,
      name: object.name,
      description: object.description,
      uri: object.uri,
      uriHash: object.uri_hash,
      data: object?.data ? Any.fromAmino(object.data) : undefined,
      features: Array.isArray(object?.features) ? object.features.map((e: any) => classFeatureFromJSON(e)) : [],
      royaltyRate: object.royalty_rate
    };
  },
  toAmino(message: MsgIssueClass): MsgIssueClassAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.symbol = message.symbol;
    obj.name = message.name;
    obj.description = message.description;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    obj.data = message.data ? Any.toAmino(message.data) : undefined;
    if (message.features) {
      obj.features = message.features.map(e => classFeatureToJSON(e));
    } else {
      obj.features = [];
    }
    obj.royalty_rate = message.royaltyRate;
    return obj;
  },
  fromAminoMsg(object: MsgIssueClassAminoMsg): MsgIssueClass {
    return MsgIssueClass.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueClassProtoMsg): MsgIssueClass {
    return MsgIssueClass.decode(message.value);
  },
  toProto(message: MsgIssueClass): Uint8Array {
    return MsgIssueClass.encode(message).finish();
  },
  toProtoMsg(message: MsgIssueClass): MsgIssueClassProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
      value: MsgIssueClass.encode(message).finish()
    };
  }
};
function createBaseMsgMint(): MsgMint {
  return {
    sender: "",
    classId: "",
    id: "",
    uri: "",
    uriHash: "",
    data: Any.fromPartial({})
  };
}
export const MsgMint = {
  encode(message: MsgMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(42).string(message.uriHash);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(50).fork()).ldelim();
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
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.uriHash = reader.string();
          break;
        case 6:
          message.data = Any.decode(reader, reader.uint32());
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
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    return {
      sender: object.sender,
      classId: object.class_id,
      id: object.id,
      uri: object.uri,
      uriHash: object.uri_hash,
      data: object?.data ? Any.fromAmino(object.data) : undefined
    };
  },
  toAmino(message: MsgMint): MsgMintAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    obj.data = message.data ? Any.toAmino(message.data) : undefined;
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
      typeUrl: "/coreum.asset.nft.v1.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    sender: "",
    classId: "",
    id: ""
  };
}
export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
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
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
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
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    return {
      sender: object.sender,
      classId: object.class_id,
      id: object.id
    };
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.id = message.id;
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
      typeUrl: "/coreum.asset.nft.v1.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  }
};
function createBaseMsgFreeze(): MsgFreeze {
  return {
    sender: "",
    classId: "",
    id: ""
  };
}
export const MsgFreeze = {
  encode(message: MsgFreeze, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
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
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
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
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgFreezeAmino): MsgFreeze {
    return {
      sender: object.sender,
      classId: object.class_id,
      id: object.id
    };
  },
  toAmino(message: MsgFreeze): MsgFreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.id = message.id;
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
      typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
      value: MsgFreeze.encode(message).finish()
    };
  }
};
function createBaseMsgUnfreeze(): MsgUnfreeze {
  return {
    sender: "",
    classId: "",
    id: ""
  };
}
export const MsgUnfreeze = {
  encode(message: MsgUnfreeze, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
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
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
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
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgUnfreezeAmino): MsgUnfreeze {
    return {
      sender: object.sender,
      classId: object.class_id,
      id: object.id
    };
  },
  toAmino(message: MsgUnfreeze): MsgUnfreezeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.id = message.id;
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
      typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
      value: MsgUnfreeze.encode(message).finish()
    };
  }
};
function createBaseMsgAddToWhitelist(): MsgAddToWhitelist {
  return {
    sender: "",
    classId: "",
    id: "",
    account: ""
  };
}
export const MsgAddToWhitelist = {
  encode(message: MsgAddToWhitelist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.account !== "") {
      writer.uint32(34).string(message.account);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToWhitelist {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAddToWhitelist>): MsgAddToWhitelist {
    const message = createBaseMsgAddToWhitelist();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: MsgAddToWhitelistAmino): MsgAddToWhitelist {
    return {
      sender: object.sender,
      classId: object.class_id,
      id: object.id,
      account: object.account
    };
  },
  toAmino(message: MsgAddToWhitelist): MsgAddToWhitelistAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: MsgAddToWhitelistAminoMsg): MsgAddToWhitelist {
    return MsgAddToWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddToWhitelistProtoMsg): MsgAddToWhitelist {
    return MsgAddToWhitelist.decode(message.value);
  },
  toProto(message: MsgAddToWhitelist): Uint8Array {
    return MsgAddToWhitelist.encode(message).finish();
  },
  toProtoMsg(message: MsgAddToWhitelist): MsgAddToWhitelistProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
      value: MsgAddToWhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveFromWhitelist(): MsgRemoveFromWhitelist {
  return {
    sender: "",
    classId: "",
    id: "",
    account: ""
  };
}
export const MsgRemoveFromWhitelist = {
  encode(message: MsgRemoveFromWhitelist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.account !== "") {
      writer.uint32(34).string(message.account);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveFromWhitelist {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveFromWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoveFromWhitelist>): MsgRemoveFromWhitelist {
    const message = createBaseMsgRemoveFromWhitelist();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveFromWhitelistAmino): MsgRemoveFromWhitelist {
    return {
      sender: object.sender,
      classId: object.class_id,
      id: object.id,
      account: object.account
    };
  },
  toAmino(message: MsgRemoveFromWhitelist): MsgRemoveFromWhitelistAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveFromWhitelistAminoMsg): MsgRemoveFromWhitelist {
    return MsgRemoveFromWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveFromWhitelistProtoMsg): MsgRemoveFromWhitelist {
    return MsgRemoveFromWhitelist.decode(message.value);
  },
  toProto(message: MsgRemoveFromWhitelist): Uint8Array {
    return MsgRemoveFromWhitelist.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveFromWhitelist): MsgRemoveFromWhitelistProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
      value: MsgRemoveFromWhitelist.encode(message).finish()
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
      typeUrl: "/coreum.asset.nft.v1.EmptyResponse",
      value: EmptyResponse.encode(message).finish()
    };
  }
};