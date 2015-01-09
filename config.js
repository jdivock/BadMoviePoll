System.config({
  "paths": {
    "*": "*.js",
    "BadMoviePoll/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "build": [
      "npm:process@0.10.0/browser",
      "npm:react@0.12.2/lib/escapeTextForBrowser",
      "npm:react@0.12.2/lib/memoizeStringOnly",
      "npm:react@0.12.2/lib/emptyFunction",
      "npm:react@0.12.2/lib/keyMirror",
      "npm:react@0.12.2/lib/PooledClass",
      "npm:react@0.12.2/lib/Object.assign",
      "npm:react@0.12.2/lib/ReactCurrentOwner",
      "npm:react@0.12.2/lib/ReactRootIndex",
      "npm:react@0.12.2/lib/emptyObject",
      "npm:react@0.12.2/lib/CallbackQueue",
      "npm:react@0.12.2/lib/ReactPerf",
      "npm:react@0.12.2/lib/Transaction",
      "npm:react@0.12.2/lib/ReactPropTypeLocations",
      "npm:react@0.12.2/lib/monitorCodeUse",
      "npm:react@0.12.2/lib/ReactEmptyComponent",
      "npm:react@0.12.2/lib/ReactErrorUtils",
      "npm:react@0.12.2/lib/ReactLegacyElement",
      "npm:react@0.12.2/lib/joinClasses",
      "npm:react@0.12.2/lib/ReactPropTypeLocationNames",
      "npm:react@0.12.2/lib/ReactNativeComponent",
      "npm:react@0.12.2/lib/keyOf",
      "npm:react@0.12.2/lib/mapObject",
      "npm:react@0.12.2/lib/shouldUpdateReactComponent",
      "npm:react@0.12.2/lib/ReactDOM",
      "npm:react@0.12.2/lib/CSSProperty",
      "npm:react@0.12.2/lib/ExecutionEnvironment",
      "npm:react@0.12.2/lib/camelize",
      "npm:react@0.12.2/lib/dangerousStyleValue",
      "npm:react@0.12.2/lib/hyphenate",
      "npm:react@0.12.2/lib/EventPluginRegistry",
      "npm:react@0.12.2/lib/accumulateInto",
      "npm:react@0.12.2/lib/forEachAccumulated",
      "npm:react@0.12.2/lib/ReactEventEmitterMixin",
      "npm:react@0.12.2/lib/getUnboundedScrollPosition",
      "npm:react@0.12.2/lib/isEventSupported",
      "npm:react@0.12.2/lib/isNode",
      "npm:react@0.12.2/lib/deprecated",
      "npm:react@0.12.2/lib/getReactRootElementInContainer",
      "npm:react@0.12.2/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.12.2/lib/ReactTextComponent",
      "npm:react@0.12.2/lib/EventPropagators",
      "npm:react@0.12.2/lib/getEventTarget",
      "npm:react@0.12.2/lib/isTextInputElement",
      "npm:react@0.12.2/lib/ClientReactRootIndex",
      "npm:react@0.12.2/lib/getNodeForCharacterOffset",
      "npm:react@0.12.2/lib/getTextContentAccessor",
      "npm:react@0.12.2/lib/focusNode",
      "npm:react@0.12.2/lib/getActiveElement",
      "npm:react@0.12.2/lib/SyntheticCompositionEvent",
      "npm:react@0.12.2/lib/DefaultEventPluginOrder",
      "npm:react@0.12.2/lib/SyntheticUIEvent",
      "npm:react@0.12.2/lib/getEventModifierState",
      "npm:react@0.12.2/lib/HTMLDOMPropertyConfig",
      "npm:react@0.12.2/lib/MobileSafariClickEventPlugin",
      "npm:react@0.12.2/lib/toArray",
      "npm:react@0.12.2/lib/getMarkupWrap",
      "npm:react@0.12.2/lib/setInnerHTML",
      "npm:react@0.12.2/lib/adler32",
      "npm:react@0.12.2/lib/ReactPutListenerQueue",
      "npm:react@0.12.2/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.12.2/lib/AutoFocusMixin",
      "npm:react@0.12.2/lib/LocalEventTrapMixin",
      "npm:react@0.12.2/lib/ReactDOMImg",
      "npm:react@0.12.2/lib/ReactPropTypes",
      "npm:react@0.12.2/lib/ReactDOMOption",
      "npm:react@0.12.2/lib/ReactDOMSelect",
      "npm:react@0.12.2/lib/ReactDOMTextarea",
      "npm:react@0.12.2/lib/EventListener",
      "npm:react@0.12.2/lib/ReactInjection",
      "npm:react@0.12.2/lib/shallowEqual",
      "npm:react@0.12.2/lib/ServerReactRootIndex",
      "npm:react@0.12.2/lib/SyntheticClipboardEvent",
      "npm:react@0.12.2/lib/SyntheticFocusEvent",
      "npm:react@0.12.2/lib/getEventCharCode",
      "npm:react@0.12.2/lib/getEventKey",
      "npm:react@0.12.2/lib/SyntheticDragEvent",
      "npm:react@0.12.2/lib/SyntheticTouchEvent",
      "npm:react@0.12.2/lib/SyntheticWheelEvent",
      "npm:react@0.12.2/lib/SVGDOMPropertyConfig",
      "npm:react@0.12.2/lib/createFullPageComponent",
      "npm:react@0.12.2/lib/ReactDefaultPerfAnalysis",
      "npm:react@0.12.2/lib/performance",
      "npm:react@0.12.2/lib/ReactServerRenderingTransaction",
      "npm:react@0.12.2/lib/onlyChild",
      "npm:process@0.10.0",
      "npm:react@0.12.2/lib/warning",
      "npm:react@0.12.2/lib/EventConstants",
      "npm:react@0.12.2/lib/ReactContext",
      "npm:react@0.12.2/lib/ReactInstanceHandles",
      "npm:react@0.12.2/lib/ReactOwner",
      "npm:react@0.12.2/lib/ReactUpdates",
      "npm:react@0.12.2/lib/ReactElementValidator",
      "npm:react@0.12.2/lib/ReactPropTransferer",
      "npm:react@0.12.2/lib/instantiateReactComponent",
      "npm:react@0.12.2/lib/camelizeStyleName",
      "npm:react@0.12.2/lib/hyphenateStyleName",
      "npm:react@0.12.2/lib/EventPluginHub",
      "npm:react@0.12.2/lib/ViewportMetrics",
      "npm:react@0.12.2/lib/isTextNode",
      "npm:react@0.12.2/lib/flattenChildren",
      "npm:react@0.12.2/lib/SyntheticEvent",
      "npm:react@0.12.2/lib/ChangeEventPlugin",
      "npm:react@0.12.2/lib/ReactDOMSelection",
      "npm:react@0.12.2/lib/SyntheticMouseEvent",
      "npm:react@0.12.2/lib/createArrayFrom",
      "npm:react@0.12.2/lib/ReactMarkupChecksum",
      "npm:react@0.12.2/lib/ReactReconcileTransaction",
      "npm:react@0.12.2/lib/ReactDOMButton",
      "npm:react@0.12.2/lib/ReactDOMForm",
      "npm:react@0.12.2/lib/LinkedValueUtils",
      "npm:react@0.12.2/lib/ReactEventListener",
      "npm:react@0.12.2/lib/SelectEventPlugin",
      "npm:react@0.12.2/lib/SyntheticKeyboardEvent",
      "npm:react@0.12.2/lib/performanceNow",
      "npm:react@0.12.2/lib/ReactServerRendering",
      "github:jspm/nodelibs-process@0.1.0/index",
      "npm:react@0.12.2/lib/EventPluginUtils",
      "npm:react@0.12.2/lib/ReactElement",
      "npm:react@0.12.2/lib/ReactComponent",
      "npm:react@0.12.2/lib/ReactCompositeComponent",
      "npm:react@0.12.2/lib/CSSPropertyOperations",
      "npm:react@0.12.2/lib/ReactBrowserEventEmitter",
      "npm:react@0.12.2/lib/containsNode",
      "npm:react@0.12.2/lib/ReactMultiChild",
      "npm:react@0.12.2/lib/SyntheticInputEvent",
      "npm:react@0.12.2/lib/ReactInputSelection",
      "npm:react@0.12.2/lib/EnterLeaveEventPlugin",
      "npm:react@0.12.2/lib/createNodesFromMarkup",
      "npm:react@0.12.2/lib/ReactDOMInput",
      "npm:react@0.12.2/lib/SimpleEventPlugin",
      "npm:react@0.12.2/lib/ReactDefaultPerf",
      "github:jspm/nodelibs-process@0.1.0",
      "npm:react@0.12.2/lib/traverseAllChildren",
      "npm:react@0.12.2/lib/ReactMount",
      "npm:react@0.12.2/lib/BeforeInputEventPlugin",
      "npm:react@0.12.2/lib/CompositionEventPlugin",
      "npm:react@0.12.2/lib/Danger",
      "npm:react@0.12.2/lib/invariant",
      "npm:react@0.12.2/lib/ReactChildren",
      "npm:react@0.12.2/lib/ReactBrowserComponentMixin",
      "npm:react@0.12.2/lib/DOMChildrenOperations",
      "npm:react@0.12.2/lib/DOMProperty",
      "npm:react@0.12.2/lib/ReactDOMComponent",
      "npm:react@0.12.2/lib/ReactDOMIDOperations",
      "npm:react@0.12.2/lib/DOMPropertyOperations",
      "npm:react@0.12.2/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.12.2/lib/ReactDefaultInjection",
      "npm:react@0.12.2/lib/React",
      "npm:react@0.12.2/react",
      "npm:react@0.12.2"
    ]
  }
});

System.config({
  "map": {
    "jsonp": "npm:jsonp@0.1.0",
    "jsx": "github:floatdrop/plugin-jsx@0.1.1",
    "react": "npm:react@0.12.2",
    "github:floatdrop/plugin-jsx@0.1.1": {
      "react-tools": "npm:react-tools@0.12.2"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.0.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.0"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-fs@0.1.0": {
      "assert": "npm:assert@1.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0"
    },
    "github:jspm/nodelibs-http@1.7.0": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:asn1.js-rfc3280@0.5.2": {
      "asn1.js": "npm:asn1.js@0.6.7"
    },
    "npm:asn1.js@0.6.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@0.15.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.6.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserify-aes@0.8.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@1.1.1": {
      "bn.js": "npm:bn.js@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:browserify-sign@2.7.2": {
      "bn.js": "npm:bn.js@0.16.1",
      "browserify-rsa": "npm:browserify-rsa@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@0.15.17",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@1.2.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer@3.0.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:commander@2.5.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:commoner@0.10.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "glob": "npm:glob@4.2.2",
      "graceful-fs": "npm:graceful-fs@3.0.5",
      "iconv-lite": "npm:iconv-lite@0.4.5",
      "install": "npm:install@0.1.8",
      "mkdirp": "npm:mkdirp@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "q": "npm:q@1.1.2",
      "recast": "npm:recast@0.9.12",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@1.0.1": {
      "bn.js": "npm:bn.js@0.16.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@0.15.17"
    },
    "npm:crypto-browserify@3.9.0": {
      "browserify-aes": "npm:browserify-aes@0.8.1",
      "browserify-sign": "npm:browserify-sign@2.7.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-ecdh": "npm:create-ecdh@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "diffie-hellman": "npm:diffie-hellman@2.2.2",
      "pbkdf2-compat": "npm:pbkdf2-compat@2.0.1",
      "public-encrypt": "npm:public-encrypt@1.1.0",
      "ripemd160": "npm:ripemd160@0.2.0",
      "sha.js": "npm:sha.js@2.3.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "ms": "npm:ms@0.6.2",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:diffie-hellman@2.2.2": {
      "bn.js": "npm:bn.js@0.16.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@1.1.5",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@0.15.17": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@0.16.1",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@0.2.1",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.2.0": {
      "jstransform": "npm:jstransform@7.0.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "through": "npm:through@2.3.6"
    },
    "npm:esprima-fb@7001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:esprima-fb@8001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:esprima-fb@8001.2001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:glob@4.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@1.0.0",
      "once": "npm:once@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@3.0.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:iconv-lite@0.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:install@0.1.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:jsonp@0.1.0": {
      "debug": "npm:debug@2.1.1"
    },
    "npm:jstransform@7.0.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@7001.1.0-dev-harmony-fb",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:jstransform@8.2.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@8001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:miller-rabin@1.1.5": {
      "bn.js": "npm:bn.js@1.0.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@1.0.0": {
      "lru-cache": "npm:lru-cache@2.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "sigmund": "npm:sigmund@1.0.0"
    },
    "npm:mkdirp@0.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:once@1.3.1": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:parse-asn1@1.2.0": {
      "asn1.js": "npm:asn1.js@0.6.7",
      "asn1.js-rfc3280": "npm:asn1.js-rfc3280@0.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pemstrip": "npm:pemstrip@0.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:pbkdf2-compat@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:public-encrypt@1.1.0": {
      "bn.js": "npm:bn.js@0.16.1",
      "browserify-rsa": "npm:browserify-rsa@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@1.2.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:q@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:react-tools@0.12.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.1",
      "jstransform": "npm:jstransform@8.2.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:react@0.12.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.2.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:recast@0.9.12": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.6.7",
      "esprima-fb": "npm:esprima-fb@8001.2001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:ripemd160@0.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:sha.js@2.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:sigmund@1.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.6": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});

