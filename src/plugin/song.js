const _0x3e51e4 = function () {
  let _0x53d0c8 = true;
  return function (_0x3c5979, _0x35ac1d) {
    const _0x17f617 = _0x53d0c8 ? function () {
      if (_0x35ac1d) {
        const _0x4b505d = _0x35ac1d.apply(_0x3c5979, arguments);
        _0x35ac1d = null;
        return _0x4b505d;
      }
    } : function () {};
    _0x53d0c8 = false;
    return _0x17f617;
  };
}();
const _0x4252c6 = _0x3e51e4(this, function () {
  return _0x4252c6.toString().search("(((.+)+)+)+$").toString().constructor(_0x4252c6).search("(((.+)+)+)+$");
});
_0x4252c6();
const _0x3e4743 = function () {
  let _0x31f6ad = true;
  return function (_0x484752, _0x5a8753) {
    const _0x374a65 = _0x31f6ad ? function () {
      if (_0x5a8753) {
        const _0x468ad4 = _0x5a8753.apply(_0x484752, arguments);
        _0x5a8753 = null;
        return _0x468ad4;
      }
    } : function () {};
    _0x31f6ad = false;
    return _0x374a65;
  };
}();
(function () {
  _0x3e4743(this, function () {
    const _0x3cbd23 = new RegExp("function *\\( *\\)");
    const _0x312e44 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x38ed2a = _0x12449a("init");
    if (!_0x3cbd23.test(_0x38ed2a + "chain") || !_0x312e44.test(_0x38ed2a + "input")) {
      _0x38ed2a('0');
    } else {
      _0x12449a();
    }
  })();
})();
(function () {
  let _0x619f9;
  try {
    const _0x801940 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x619f9 = _0x801940();
  } catch (_0x1b3d08) {
    _0x619f9 = window;
  }
  _0x619f9.setInterval(_0x12449a, 4000);
})();
const _0x26e7ab = function () {
  let _0x274f9d = true;
  return function (_0x5b794b, _0x47a515) {
    const _0x500535 = _0x274f9d ? function () {
      if (_0x47a515) {
        const _0x3f3beb = _0x47a515.apply(_0x5b794b, arguments);
        _0x47a515 = null;
        return _0x3f3beb;
      }
    } : function () {};
    _0x274f9d = false;
    return _0x500535;
  };
}();
const _0x4a3e0f = _0x26e7ab(this, function () {
  let _0x4dc9d0;
  try {
    const _0x3d9c65 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4dc9d0 = _0x3d9c65();
  } catch (_0x402b95) {
    _0x4dc9d0 = window;
  }
  const _0x42af70 = _0x4dc9d0.console = _0x4dc9d0.console || {};
  const _0x4f342e = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x533876 = 0; _0x533876 < _0x4f342e.length; _0x533876++) {
    const _0x22d7bf = _0x26e7ab.constructor.prototype.bind(_0x26e7ab);
    const _0x21fb39 = _0x4f342e[_0x533876];
    const _0x3a963d = _0x42af70[_0x21fb39] || _0x22d7bf;
    _0x22d7bf.__proto__ = _0x26e7ab.bind(_0x26e7ab);
    _0x22d7bf.toString = _0x3a963d.toString.bind(_0x3a963d);
    _0x42af70[_0x21fb39] = _0x22d7bf;
  }
});
_0x4a3e0f();
import _0x1854bb from 'axios';
import _0x356547 from 'yt-search';
import _0x374cbc from '../../config.cjs';
const Mp3 = async _0x3ad715 => {
  return new Promise((_0x4a1ca6, _0x3afe3c) => {
    let _0x2085cc;
    let _0x1700c9;
    const _0x5d1a91 = async () => {
      try {
        const _0x1c4608 = await _0x1854bb.get("https://ab.cococococ.com/ajax/download.php?copyright=0&format=mp3&url=" + encodeURIComponent(_0x3ad715) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222");
        return _0x1c4608.data;
      } catch (_0x26093d) {
        throw new Error("Failed to get download ID");
      }
    };
    const _0x271e03 = async _0x39ad9f => {
      try {
        const _0x2f6bb1 = await _0x1854bb.get("https://p.oceansaver.in/ajax/progress.php?id=" + _0x39ad9f);
        return _0x2f6bb1.data;
      } catch (_0x5795c9) {
        throw new Error("Failed to check progress");
      }
    };
    const _0xa7283f = async _0x33e278 => {
      try {
        const _0x45b114 = await _0x271e03(_0x33e278);
        if (_0x45b114.progress === 1000) {
          _0x4a1ca6({
            'type': "mp3 (128 kbps)",
            'title': _0x2085cc,
            'image': _0x1700c9,
            'download_url': _0x45b114.download_url
          });
        } else {
          setTimeout(() => _0xa7283f(_0x33e278), 1000);
        }
      } catch (_0x4727c2) {
        _0x3afe3c(_0x4727c2);
      }
    };
    _0x5d1a91().then(_0x389d66 => {
      if (_0x389d66.success && _0x389d66.id) {
        _0x2085cc = _0x389d66.info.title;
        _0x1700c9 = _0x389d66.info.image;
        _0xa7283f(_0x389d66.id);
      } else {
        _0x3afe3c(new Error("Failed to get download ID from server."));
      }
    })["catch"](_0x3afe3c);
  });
};
const song = async (_0x151233, _0x3a368c) => {
  const _0x7f9d2c = _0x374cbc.PREFIX;
  const _0x3749cf = _0x151233.body.startsWith(_0x7f9d2c) ? _0x151233.body.slice(_0x7f9d2c.length).split(" ")[0].toLowerCase() : '';
  const _0x3bfe3b = _0x151233.body.slice(_0x7f9d2c.length + _0x3749cf.length).trim();
  const _0x13aa25 = ["song", "ytmp3", "music", "ytmp3doc"];
  if (_0x13aa25.includes(_0x3749cf)) {
    if (!_0x3bfe3b) {
      return _0x151233.reply("Please provide a YouTube URL or search query.");
    }
    try {
      await _0x151233.React('🕘');
      const _0x2c9136 = _0x3bfe3b.includes("youtube.com") || _0x3bfe3b.includes("youtu.be");
      const _0x484931 = async (_0x366ae6, _0x1a25d3) => {
        try {
          const _0x1b3d47 = {
            responseType: "arraybuffer"
          };
          const _0x11b269 = await _0x1854bb.get(_0x1a25d3, _0x1b3d47);
          const _0x54d36a = {
            'audio': Buffer.from(_0x11b269.data),
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'mentionedJid': [_0x151233.sender],
              'externalAdReply': {
                'title': "↺ |◁   II   ▷|   ♡",
                'body': "Now playing: " + _0x366ae6.title,
                'thumbnailUrl': _0x366ae6.image,
                'sourceUrl': _0x366ae6.url,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          };
          if (_0x3749cf === "ytmp3doc") {
            _0x54d36a.document = _0x54d36a.audio;
            delete _0x54d36a.audio;
            _0x54d36a.fileName = _0x366ae6.title + ".mp3";
          }
          await _0x3a368c.sendMessage(_0x151233.from, _0x54d36a, {
            'quoted': _0x151233
          });
          await _0x151233.React('✅');
        } catch (_0xca39cc) {
          throw new Error("Failed to download the audio.");
        }
      };
      if (_0x2c9136) {
        const {
          title: _0x22dfda,
          download_url: _0xaaea14
        } = await Mp3(_0x3bfe3b);
        if (_0xaaea14) {
          const _0x369974 = {
            title: _0x22dfda
          };
          await _0x484931(_0x369974, _0xaaea14);
        } else {
          throw new Error("Failed to fetch download URL.");
        }
      } else {
        const _0x2f8dbe = await _0x356547(_0x3bfe3b);
        const _0x3d379d = _0x2f8dbe.videos[0];
        if (!_0x3d379d) {
          _0x151233.reply("Audio not found.");
          await _0x151233.React('❌');
          return;
        }
        _0x151233.reply("*_Please Wait Downloading..._*\n*_" + _0x3d379d.title + '_*');
        const {
          title: _0x47de50,
          download_url: _0x39922f
        } = await Mp3(_0x3d379d.url);
        if (_0x39922f) {
          const _0x2a34f5 = {
            title: _0x47de50
          };
          await _0x484931(_0x2a34f5, _0x39922f);
        } else {
          throw new Error("Failed to fetch download URL.");
        }
      }
    } catch (_0x5e3e33) {
      console.error("Error generating response:", _0x5e3e33);
      _0x151233.reply("Error processing your request.");
      await _0x151233.React('❌');
    }
  }
};
export default song;
function _0x12449a(_0x56ebf2) {
  function _0x3836c5(_0x39daf0) {
    if (typeof _0x39daf0 === "string") {
      return function (_0x249662) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x39daf0 / _0x39daf0).length !== 1 || _0x39daf0 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x3836c5(++_0x39daf0);
  }
  try {
    if (_0x56ebf2) {
      return _0x3836c5;
    } else {
      _0x3836c5(0);
    }
  } catch (_0x3e00a7) {}
}
