//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIssueClass, MsgMint, MsgBurn, MsgFreeze, MsgUnfreeze, MsgAddToWhitelist, MsgRemoveFromWhitelist } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/coreum.asset.nft.v1.MsgIssueClass", MsgIssueClass], ["/coreum.asset.nft.v1.MsgMint", MsgMint], ["/coreum.asset.nft.v1.MsgBurn", MsgBurn], ["/coreum.asset.nft.v1.MsgFreeze", MsgFreeze], ["/coreum.asset.nft.v1.MsgUnfreeze", MsgUnfreeze], ["/coreum.asset.nft.v1.MsgAddToWhitelist", MsgAddToWhitelist], ["/coreum.asset.nft.v1.MsgRemoveFromWhitelist", MsgRemoveFromWhitelist]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    issueClass(value: MsgIssueClass) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
        value: MsgIssueClass.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    freeze(value: MsgFreeze) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
        value: MsgFreeze.encode(value).finish()
      };
    },
    unfreeze(value: MsgUnfreeze) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
        value: MsgUnfreeze.encode(value).finish()
      };
    },
    addToWhitelist(value: MsgAddToWhitelist) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
        value: MsgAddToWhitelist.encode(value).finish()
      };
    },
    removeFromWhitelist(value: MsgRemoveFromWhitelist) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
        value: MsgRemoveFromWhitelist.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    issueClass(value: MsgIssueClass) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgMint",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgBurn",
        value
      };
    },
    freeze(value: MsgFreeze) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
        value
      };
    },
    unfreeze(value: MsgUnfreeze) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
        value
      };
    },
    addToWhitelist(value: MsgAddToWhitelist) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
        value
      };
    },
    removeFromWhitelist(value: MsgRemoveFromWhitelist) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
        value
      };
    }
  },
  fromPartial: {
    issueClass(value: MsgIssueClass) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
        value: MsgIssueClass.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    freeze(value: MsgFreeze) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
        value: MsgFreeze.fromPartial(value)
      };
    },
    unfreeze(value: MsgUnfreeze) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
        value: MsgUnfreeze.fromPartial(value)
      };
    },
    addToWhitelist(value: MsgAddToWhitelist) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
        value: MsgAddToWhitelist.fromPartial(value)
      };
    },
    removeFromWhitelist(value: MsgRemoveFromWhitelist) {
      return {
        typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
        value: MsgRemoveFromWhitelist.fromPartial(value)
      };
    }
  }
};