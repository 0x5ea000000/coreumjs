import * as _1 from "./asset/ft/v1/event";
import * as _2 from "./asset/ft/v1/genesis";
import * as _3 from "./asset/ft/v1/params";
import * as _4 from "./asset/ft/v1/query";
import * as _5 from "./asset/ft/v1/token";
import * as _6 from "./asset/ft/v1/tx";
import * as _7 from "./asset/nft/v1/event";
import * as _8 from "./asset/nft/v1/genesis";
import * as _9 from "./asset/nft/v1/nft";
import * as _10 from "./asset/nft/v1/params";
import * as _11 from "./asset/nft/v1/query";
import * as _12 from "./asset/nft/v1/tx";
import * as _13 from "./asset/nft/v1/types";
import * as _14 from "./customparams/v1/genesis";
import * as _15 from "./customparams/v1/params";
import * as _16 from "./customparams/v1/query";
import * as _17 from "./delay/genesis";
import * as _18 from "./feemodel/v1/genesis";
import * as _19 from "./feemodel/v1/params";
import * as _20 from "./feemodel/v1/query";
import * as _21 from "./nft/v1beta1/event";
import * as _22 from "./nft/v1beta1/genesis";
import * as _23 from "./nft/v1beta1/nft";
import * as _24 from "./nft/v1beta1/query";
import * as _25 from "./nft/v1beta1/tx";
import * as _95 from "./asset/ft/v1/tx.amino";
import * as _96 from "./asset/nft/v1/tx.amino";
import * as _97 from "./nft/v1beta1/tx.amino";
import * as _98 from "./asset/ft/v1/tx.registry";
import * as _99 from "./asset/nft/v1/tx.registry";
import * as _100 from "./nft/v1beta1/tx.registry";
import * as _101 from "./asset/ft/v1/query.rpc.Query";
import * as _102 from "./asset/nft/v1/query.rpc.Query";
import * as _103 from "./customparams/v1/query.rpc.Query";
import * as _104 from "./feemodel/v1/query.rpc.Query";
import * as _105 from "./nft/v1beta1/query.rpc.Query";
import * as _106 from "./asset/ft/v1/tx.rpc.msg";
import * as _107 from "./asset/nft/v1/tx.rpc.msg";
import * as _108 from "./nft/v1beta1/tx.rpc.msg";
import * as _139 from "./rpc.query";
import * as _140 from "./rpc.tx";
export namespace coreum {
  export namespace asset {
    export namespace ft {
      export const v1 = {
        ..._1,
        ..._2,
        ..._3,
        ..._4,
        ..._5,
        ..._6,
        ..._95,
        ..._98,
        ..._101,
        ..._106
      };
    }
    export namespace nft {
      export const v1 = {
        ..._7,
        ..._8,
        ..._9,
        ..._10,
        ..._11,
        ..._12,
        ..._13,
        ..._96,
        ..._99,
        ..._102,
        ..._107
      };
    }
  }
  export namespace customparams {
    export const v1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._103
    };
  }
  export namespace delay {
    export const v1 = {
      ..._17
    };
  }
  export namespace feemodel {
    export const v1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._104
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._97,
      ..._100,
      ..._105,
      ..._108
    };
  }
  export const ClientFactory = {
    ..._139,
    ..._140
  };
}