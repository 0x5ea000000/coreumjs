import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** ClassFeature defines possible features of non-fungible token class. */
export enum ClassFeature {
  burning = 0,
  freezing = 1,
  whitelisting = 2,
  disable_sending = 3,
  UNRECOGNIZED = -1,
}
export const ClassFeatureSDKType = ClassFeature;
export const ClassFeatureAmino = ClassFeature;
export function classFeatureFromJSON(object: any): ClassFeature {
  switch (object) {
    case 0:
    case "burning":
      return ClassFeature.burning;
    case 1:
    case "freezing":
      return ClassFeature.freezing;
    case 2:
    case "whitelisting":
      return ClassFeature.whitelisting;
    case 3:
    case "disable_sending":
      return ClassFeature.disable_sending;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClassFeature.UNRECOGNIZED;
  }
}
export function classFeatureToJSON(object: ClassFeature): string {
  switch (object) {
    case ClassFeature.burning:
      return "burning";
    case ClassFeature.freezing:
      return "freezing";
    case ClassFeature.whitelisting:
      return "whitelisting";
    case ClassFeature.disable_sending:
      return "disable_sending";
    case ClassFeature.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ClassDefinition defines the non-fungible token class settings to store. */
export interface ClassDefinition {
  id: string;
  issuer: string;
  features: ClassFeature[];
  /**
   * royalty_rate is a number between 0 and 1,which will be used in coreum native Dex.
   * whenever an NFT this class is traded on the Dex, the traded amount will be multiplied by this value
   * that will be transferred to the issuer of the NFT.
   */
  royaltyRate: string;
}
export interface ClassDefinitionProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.ClassDefinition";
  value: Uint8Array;
}
/** ClassDefinition defines the non-fungible token class settings to store. */
export interface ClassDefinitionAmino {
  id: string;
  issuer: string;
  features: ClassFeature[];
  /**
   * royalty_rate is a number between 0 and 1,which will be used in coreum native Dex.
   * whenever an NFT this class is traded on the Dex, the traded amount will be multiplied by this value
   * that will be transferred to the issuer of the NFT.
   */
  royalty_rate: string;
}
export interface ClassDefinitionAminoMsg {
  type: "/coreum.asset.nft.v1.ClassDefinition";
  value: ClassDefinitionAmino;
}
/** ClassDefinition defines the non-fungible token class settings to store. */
export interface ClassDefinitionSDKType {
  id: string;
  issuer: string;
  features: ClassFeature[];
  royalty_rate: string;
}
/** Class is a full representation of the non-fungible token class. */
export interface Class {
  id: string;
  issuer: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
  data: Any;
  features: ClassFeature[];
  /**
   * royalty_rate is a number between 0 and 1,which will be used in coreum native Dex.
   * whenever an NFT this class is traded on the Dex, the traded amount will be multiplied by this value
   * that will be transferred to the issuer of the NFT.
   */
  royaltyRate: string;
}
export interface ClassProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.Class";
  value: Uint8Array;
}
/** Class is a full representation of the non-fungible token class. */
export interface ClassAmino {
  id: string;
  issuer: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uri_hash: string;
  data?: AnyAmino;
  features: ClassFeature[];
  /**
   * royalty_rate is a number between 0 and 1,which will be used in coreum native Dex.
   * whenever an NFT this class is traded on the Dex, the traded amount will be multiplied by this value
   * that will be transferred to the issuer of the NFT.
   */
  royalty_rate: string;
}
export interface ClassAminoMsg {
  type: "/coreum.asset.nft.v1.Class";
  value: ClassAmino;
}
/** Class is a full representation of the non-fungible token class. */
export interface ClassSDKType {
  id: string;
  issuer: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uri_hash: string;
  data: AnySDKType;
  features: ClassFeature[];
  royalty_rate: string;
}
function createBaseClassDefinition(): ClassDefinition {
  return {
    id: "",
    issuer: "",
    features: [],
    royaltyRate: ""
  };
}
export const ClassDefinition = {
  encode(message: ClassDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    writer.uint32(26).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.royaltyRate !== "") {
      writer.uint32(34).string(message.royaltyRate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClassDefinition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
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
          message.royaltyRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClassDefinition>): ClassDefinition {
    const message = createBaseClassDefinition();
    message.id = object.id ?? "";
    message.issuer = object.issuer ?? "";
    message.features = object.features?.map(e => e) || [];
    message.royaltyRate = object.royaltyRate ?? "";
    return message;
  },
  fromAmino(object: ClassDefinitionAmino): ClassDefinition {
    return {
      id: object.id,
      issuer: object.issuer,
      features: Array.isArray(object?.features) ? object.features.map((e: any) => classFeatureFromJSON(e)) : [],
      royaltyRate: object.royalty_rate
    };
  },
  toAmino(message: ClassDefinition): ClassDefinitionAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.issuer = message.issuer;
    if (message.features) {
      obj.features = message.features.map(e => classFeatureToJSON(e));
    } else {
      obj.features = [];
    }
    obj.royalty_rate = message.royaltyRate;
    return obj;
  },
  fromAminoMsg(object: ClassDefinitionAminoMsg): ClassDefinition {
    return ClassDefinition.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassDefinitionProtoMsg): ClassDefinition {
    return ClassDefinition.decode(message.value);
  },
  toProto(message: ClassDefinition): Uint8Array {
    return ClassDefinition.encode(message).finish();
  },
  toProtoMsg(message: ClassDefinition): ClassDefinitionProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.ClassDefinition",
      value: ClassDefinition.encode(message).finish()
    };
  }
};
function createBaseClass(): Class {
  return {
    id: "",
    issuer: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    data: Any.fromPartial({}),
    features: [],
    royaltyRate: ""
  };
}
export const Class = {
  encode(message: Class, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(50).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(58).string(message.uriHash);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.royaltyRate !== "") {
      writer.uint32(82).string(message.royaltyRate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Class {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.uri = reader.string();
          break;
        case 7:
          message.uriHash = reader.string();
          break;
        case 8:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.features.push((reader.int32() as any));
            }
          } else {
            message.features.push((reader.int32() as any));
          }
          break;
        case 10:
          message.royaltyRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Class>): Class {
    const message = createBaseClass();
    message.id = object.id ?? "";
    message.issuer = object.issuer ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    message.features = object.features?.map(e => e) || [];
    message.royaltyRate = object.royaltyRate ?? "";
    return message;
  },
  fromAmino(object: ClassAmino): Class {
    return {
      id: object.id,
      issuer: object.issuer,
      name: object.name,
      symbol: object.symbol,
      description: object.description,
      uri: object.uri,
      uriHash: object.uri_hash,
      data: object?.data ? Any.fromAmino(object.data) : undefined,
      features: Array.isArray(object?.features) ? object.features.map((e: any) => classFeatureFromJSON(e)) : [],
      royaltyRate: object.royalty_rate
    };
  },
  toAmino(message: Class): ClassAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.issuer = message.issuer;
    obj.name = message.name;
    obj.symbol = message.symbol;
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
  fromAminoMsg(object: ClassAminoMsg): Class {
    return Class.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassProtoMsg): Class {
    return Class.decode(message.value);
  },
  toProto(message: Class): Uint8Array {
    return Class.encode(message).finish();
  },
  toProtoMsg(message: Class): ClassProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.Class",
      value: Class.encode(message).finish()
    };
  }
};