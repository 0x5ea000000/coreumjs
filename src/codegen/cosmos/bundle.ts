import * as _27 from "./auth/v1beta1/auth";
import * as _28 from "./auth/v1beta1/genesis";
import * as _29 from "./auth/v1beta1/query";
import * as _30 from "./authz/v1beta1/authz";
import * as _31 from "./authz/v1beta1/event";
import * as _32 from "./authz/v1beta1/genesis";
import * as _33 from "./authz/v1beta1/query";
import * as _34 from "./authz/v1beta1/tx";
import * as _35 from "./bank/v1beta1/authz";
import * as _36 from "./bank/v1beta1/bank";
import * as _37 from "./bank/v1beta1/genesis";
import * as _38 from "./bank/v1beta1/query";
import * as _39 from "./bank/v1beta1/tx";
import * as _40 from "./base/abci/v1beta1/abci";
import * as _41 from "./base/query/v1beta1/pagination";
import * as _42 from "./base/reflection/v2alpha1/reflection";
import * as _43 from "./base/v1beta1/coin";
import * as _44 from "./crypto/ed25519/keys";
import * as _45 from "./crypto/hd/v1/hd";
import * as _46 from "./crypto/keyring/v1/record";
import * as _47 from "./crypto/multisig/keys";
import * as _48 from "./crypto/secp256k1/keys";
import * as _49 from "./crypto/secp256r1/keys";
import * as _50 from "./distribution/v1beta1/distribution";
import * as _51 from "./distribution/v1beta1/genesis";
import * as _52 from "./distribution/v1beta1/query";
import * as _53 from "./distribution/v1beta1/tx";
import * as _54 from "./gov/v1beta1/genesis";
import * as _55 from "./gov/v1beta1/gov";
import * as _56 from "./gov/v1beta1/query";
import * as _57 from "./gov/v1beta1/tx";
import * as _58 from "./staking/v1beta1/authz";
import * as _59 from "./staking/v1beta1/genesis";
import * as _60 from "./staking/v1beta1/query";
import * as _61 from "./staking/v1beta1/staking";
import * as _62 from "./staking/v1beta1/tx";
import * as _63 from "./tx/signing/v1beta1/signing";
import * as _64 from "./tx/v1beta1/service";
import * as _65 from "./tx/v1beta1/tx";
import * as _66 from "./upgrade/v1beta1/query";
import * as _67 from "./upgrade/v1beta1/tx";
import * as _68 from "./upgrade/v1beta1/upgrade";
import * as _109 from "./authz/v1beta1/tx.amino";
import * as _110 from "./bank/v1beta1/tx.amino";
import * as _111 from "./distribution/v1beta1/tx.amino";
import * as _112 from "./gov/v1beta1/tx.amino";
import * as _113 from "./staking/v1beta1/tx.amino";
import * as _114 from "./upgrade/v1beta1/tx.amino";
import * as _115 from "./authz/v1beta1/tx.registry";
import * as _116 from "./bank/v1beta1/tx.registry";
import * as _117 from "./distribution/v1beta1/tx.registry";
import * as _118 from "./gov/v1beta1/tx.registry";
import * as _119 from "./staking/v1beta1/tx.registry";
import * as _120 from "./upgrade/v1beta1/tx.registry";
import * as _121 from "./auth/v1beta1/query.rpc.Query";
import * as _122 from "./authz/v1beta1/query.rpc.Query";
import * as _123 from "./bank/v1beta1/query.rpc.Query";
import * as _124 from "./distribution/v1beta1/query.rpc.Query";
import * as _125 from "./gov/v1beta1/query.rpc.Query";
import * as _126 from "./staking/v1beta1/query.rpc.Query";
import * as _127 from "./tx/v1beta1/service.rpc.Service";
import * as _128 from "./upgrade/v1beta1/query.rpc.Query";
import * as _129 from "./authz/v1beta1/tx.rpc.msg";
import * as _130 from "./bank/v1beta1/tx.rpc.msg";
import * as _131 from "./distribution/v1beta1/tx.rpc.msg";
import * as _132 from "./gov/v1beta1/tx.rpc.msg";
import * as _133 from "./staking/v1beta1/tx.rpc.msg";
import * as _134 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _141 from "./rpc.query";
import * as _142 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._121
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._109,
      ..._115,
      ..._122,
      ..._129
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._110,
      ..._116,
      ..._123,
      ..._130
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._40
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._41
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._42
      };
    }
    export const v1beta1 = {
      ..._43
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._44
    };
    export namespace hd {
      export const v1 = {
        ..._45
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._46
      };
    }
    export const multisig = {
      ..._47
    };
    export const secp256k1 = {
      ..._48
    };
    export const secp256r1 = {
      ..._49
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._111,
      ..._117,
      ..._124,
      ..._131
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._112,
      ..._118,
      ..._125,
      ..._132
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._113,
      ..._119,
      ..._126,
      ..._133
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._63
      };
    }
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._127
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._114,
      ..._120,
      ..._128,
      ..._134
    };
  }
  export const ClientFactory = {
    ..._141,
    ..._142
  };
}