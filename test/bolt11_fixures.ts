// https://github.com/bitcoinjs/bolt11/blob/2f7e81af484a7a16f8303bb43e6ce90a8e3262fc/test/fixtures.json

export default {
  satToHrp: {
    valid: [
      {
        input: 1,
        output: '10n',
      },
      {
        input: 10,
        output: '100n',
      },
      {
        input: 100,
        output: '1u',
      },
      {
        input: 100000,
        output: '1m',
      },
      {
        input: 100000000,
        output: '1',
      },
      {
        input: 123456789,
        output: '1234567890n',
      },
      {
        input: 123450000,
        output: '1234500u',
      },
      {
        input: 123400000,
        output: '1234m',
      },
    ],
    invalid: [
      {
        input: '10.2',
        error: 'satoshis must be an integer',
      },
      {
        input: 34.7,
        error: 'satoshis must be an integer',
      },
    ],
  },
  millisatToHrp: {
    valid: [
      {
        input: 1,
        output: '10p',
      },
    ],
    invalid: [
      {
        input: '10.2',
        error: 'millisatoshis must be an integer',
      },
    ],
  },
  hrpToSat: {
    valid: [
      {
        input: '10n',
        output: '1',
      },
      {
        input: '1u',
        output: '100',
      },
      {
        input: '1m',
        output: '100000',
      },
      {
        input: '1',
        output: '100000000',
      },
      {
        input: '1234567890n',
        output: '123456789',
      },
      {
        input: '1234567u',
        output: '123456700',
      },
      {
        input: '1234m',
        output: '123400000',
      },
    ],
    invalid: [
      {
        input: '10x',
        error: 'Not a valid multiplier for the amount',
      },
      {
        input: '1f0',
        error: 'Not a valid human readable amount',
      },
      {
        input: '9n',
        error: 'Amount is outside of valid range',
      },
      {
        input: '5670p',
        error: 'Amount is outside of valid range',
      },
      {
        input: '21000001',
        error: 'Amount is outside of valid range',
      },
    ],
  },
  hrpToMillisat: {
    valid: [
      {
        input: '10p',
        output: '1',
      },
    ],
    invalid: [
      {
        input: '8p',
        error: 'Amount is outside of valid range',
      },
    ],
  },
  sign: {
    invalid: [
      {
        data: {
          coinType: 'bitcoin',
          complete: false,
          satoshis: null,
          millisatoshis: null,
          paymentRequest: '',
          prefix: 'lnbc',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: 'Please consider supporting this project',
            },
          ],
          timestamp: 1513236122,
          timestampString: '2017-12-14T07:22:02.000Z',
          wordsTemp:
            'temp1pdryf56pp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdpl2pkx2ctnv5sxxmmwwd5kgetjypeh2ursdae8g6twvus8g6rfwvs8qun0dfjkxaqfg6ad2',
        },
        privateKey: 'e126f68f7eafcc8b74f54d269fe206be715000f94dac067d1c04a8ca',
        error: 'privateKey must be a 32 byte Buffer and valid private key',
      },
      {
        data: {
          coinType: 'bitcoin',
          complete: false,
          satoshis: null,
          millisatoshis: null,
          paymentRequest: '',
          prefix: 'lnbc',
          payeeNodeKey: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f934dd9ad',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: 'Please consider supporting this project',
            },
            {
              tagName: 'payee_node_key',
              data: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f93ffffff',
            },
          ],
          timestamp: 1513236122,
          timestampString: '2017-12-14T07:22:02.000Z',
          wordsTemp:
            'temp1pdryf56pp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdpl2pkx2ctnv5sxxmmwwd5kgetjypeh2ursdae8g6twvus8g6rfwvs8qun0dfjkxaqfg6ad2',
        },
        error: 'payee node key tag and payeeNodeKey attribute must match',
      },
      {
        data: {
          coinType: 'bitcoin',
          complete: false,
          satoshis: null,
          millisatoshis: null,
          paymentRequest: '',
          prefix: 'lnbc',
          payeeNodeKey: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f934dffff',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: 'Please consider supporting this project',
            },
          ],
          timestamp: 1513236122,
          timestampString: '2017-12-14T07:22:02.000Z',
          wordsTemp:
            'temp1pdryf56pp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdpl2pkx2ctnv5sxxmmwwd5kgetjypeh2ursdae8g6twvus8g6rfwvs8qun0dfjkxaqfg6ad2',
        },
        error: 'The private key given is not the private key of the node public key given',
      },
    ],
  },
  encode: {
    valid: [
      {
        data: {
          satoshis: 12,
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
          ],
        },
      },
    ],
    invalid: [
      {
        data: {
          coinType: 'fellafelcoin',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
          ],
        },
        error: 'Unknown coin type',
      },
      {
        data: {
          recoveryFlag: 1,
          signature:
            '6249c3a38d2a7d78f54f5494cf79fa06949e11eaf26ede32158f8a8e796ba1b741e88c35bec6bf5ee8291a5d50a7d35549e7fc564f7d0a39d1db5f098a0d179a',
          timestamp: 1513073744,
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
          ],
        },
        error: 'Need coinType for proper payment request reconstruction',
      },
      {
        data: {
          coinType: 'bitcoin',
          recoveryFlag: 1,
          signature:
            '6249c3a38d2a7d78f54f5494cf79fa06949e11eaf26ede32158f8a8e796ba1b741e88c35bec6bf5ee8291a5d50a7d35549e7fc564f7d0a39d1db5f098a0d179a',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
          ],
        },
        error: 'Need timestamp for proper payment request reconstruction',
      },
      {
        data: {},
        error: 'Payment Requests need tags array',
      },
      {
        data: {
          coinType: 'bitcoin',
          tags: [
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
          ],
        },
        error: 'Lightning Payment Request needs a payment hash',
      },
      {
        data: {
          coinType: 'bitcoin',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
          ],
        },
        error: 'Payment request requires description or purpose commit hash',
        addDefaults: false,
      },
      {
        data: {
          coinType: 'bitcoin',
          payeeNodeKey: '03000102030405060708090001020304050607080900010203040506070809ffff',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'payee_node_key',
              data: '030001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
          ],
        },
        error: 'payeeNodeKey and tag payee node key do not match',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
            {
              tagName: 'fallback_address',
              data: {
                address: 'tb1dqqqsyqcyq5rqwzqfpg9scrgwpuqsyqcyy5mynw',
              },
            },
          ],
        },
        error: 'Fallback address witness version is unknown',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
            {
              tagName: 'fallback_address',
              data: {
                address: 'bc1qqqqsyqcyq5rqwzqfpg9scrgwpuqsyqcy2f9nte',
              },
            },
          ],
        },
        error: 'Fallback address network type does not match payment request network type',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
            {
              tagName: 'fallback_address',
              data: {
                address: 'UmKe9X9WKo1vksgXkdhR45Rf1QKguAQwus',
              },
            },
          ],
        },
        error: 'Fallback address version (base58) is unknown or the network type is incorrect',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
            {
              tagName: 'fallback_address',
              data: {
                address: 'gd78fgGFGDGISFFgisdufudsfi7d7sfg',
              },
            },
          ],
        },
        error: 'Fallback address type is unknown',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
            {
              tagName: 'routing_info',
              data: [{}],
            },
          ],
        },
        error: 'Routing info is incomplete',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
            {
              tagName: 'routing_info',
              data: [
                {
                  pubkey: '02ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
                  short_channel_id: '0102030405060708',
                  fee_base_msat: 1,
                  fee_proportional_millionths: 20,
                  cltv_expiry_delta: 3,
                },
              ],
            },
          ],
        },
        error: 'Routing info pubkey is not a valid pubkey',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
            {
              tagName: 'routing_info',
              data: [
                {
                  pubkey: '029e03a901b85534ff1e92c43c74431f7ce72046060fcf7a95c37e148f78c77255',
                  short_channel_id: '02030405060708',
                  fee_base_msat: 1,
                  fee_proportional_millionths: 20,
                  cltv_expiry_delta: 3,
                },
              ],
            },
          ],
        },
        error: 'Routing info short channel id must be 8 bytes',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
            {
              tagName: 'routing_info',
              data: [
                {
                  pubkey: '029e03a901b85534ff1e92c43c74431f7ce72046060fcf7a95c37e148f78c77255',
                  short_channel_id: '0102030405060708',
                  fee_base_msat: 1.345,
                  fee_proportional_millionths: 20,
                  cltv_expiry_delta: 3,
                },
              ],
            },
          ],
        },
        error: 'Routing info fee base msat is not an integer',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
            {
              tagName: 'routing_info',
              data: [
                {
                  pubkey: '029e03a901b85534ff1e92c43c74431f7ce72046060fcf7a95c37e148f78c77255',
                  short_channel_id: '0102030405060708',
                  fee_base_msat: 1,
                  fee_proportional_millionths: 20.1,
                  cltv_expiry_delta: 3,
                },
              ],
            },
          ],
        },
        error: 'Routing info fee proportional millionths is not an integer',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
            {
              tagName: 'routing_info',
              data: [
                {
                  pubkey: '029e03a901b85534ff1e92c43c74431f7ce72046060fcf7a95c37e148f78c77255',
                  short_channel_id: '0102030405060708',
                  fee_base_msat: 1,
                  fee_proportional_millionths: 20,
                  cltv_expiry_delta: 3.1,
                },
              ],
            },
          ],
        },
        error: 'Routing info cltv expiry delta is not an integer',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
            {
              tagName: 'aaaaaaaaaa',
              data: {},
            },
          ],
        },
        error: 'Unknown tag key',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
            {
              tagName: 'purpose_commit_hash',
              data: 5675,
            },
          ],
        },
        error: 'purpose or purpose commit must be a string or hex string',
      },
      {
        data: {
          coinType: 'testnet',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data:
                '0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz',
            },
          ],
        },
        error: 'Description is too long: Max length 639 bytes',
      },
      {
        data: {
          coinType: 'bitcoin',
          satoshis: 23,
          millisatoshis: '23000',
          timestamp: 1496314658,
          payeeNodeKey: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f934dd9ad',
          signature:
            '38ec6891345e204145be8a3a99de38e98a39d6a569434e1845c8af7205afcfcc7f425fcd1463e93c32881ead0d6e356d467ec8c02553f9aab15e5738b11f127f',
          recoveryFlag: 0,
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'fallback_address',
              data: {
                address: '31h38a54tFMrR8kzBnP2241Jj7qKMHmhoM',
              },
            },
          ],
        },
        error: 'Signature, message, and recoveryID did not produce the same pubkey as payeeNodeKey',
      },
      {
        data: {
          coinType: 'testnet',
          satoshis: null,
          millisatoshis: null,
          timestamp: 1496314658,
          signature:
            '38ec6891345e204145be8a3a99de38e98a39d6a569434e1845c8af7205afcfcc7f425fcd1463e93c32881ead0d6e356d467ec8c02553f9aab15e5738b11f127f',
          recoveryFlag: 0,
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: 'Please consider supporting this project',
            },
            {
              tagName: 'fallback_address',
              data: {
                address: 'mfWyW5fc9NUj75YAnFgoRLrhSb9JjaD4zp',
              },
            },
            {
              tagName: 'purpose_commit_hash',
              data: 'This is some text to increase coverage',
            },
          ],
        },
        error:
          'Reconstruction with signature and recoveryID requires payeeNodeKey to verify correctness of input data.',
      },
      {
        data: {
          coinType: 'testnet',
          satoshis: 100,
          millisatoshis: '200000',
          tags: [
            {
              tagName: 'payment_hash',
              data: '0001020304050607080900010203040506070809000102030405060708090102',
            },
            {
              tagName: 'description',
              data: '??????????????? 1???',
            },
          ],
        },
        error: 'satoshis and millisatoshis do not match',
      },
    ],
  },
  decode: {
    valid: [
      {
        paymentRequest:
          'lnbc1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdpl2pkx2ctnv5sxxmmwwd5kgetjypeh2ursdae8g6twvus8g6rfwvs8qun0dfjkxaq8rkx3yf5tcsyz3d73gafnh3cax9rn449d9p5uxz9ezhhypd0elx87sjle52x86fux2ypatgddc6k63n7erqz25le42c4u4ecky03ylcqca784w',
        coinType: 'bitcoin',
        prefix: 'lnbc',
        complete: true,
        millisatoshis: null,
        timestamp: 1496314658,
        timestampString: '2017-06-01T10:57:38.000Z',
        timeExpireDate: 1496318258,
        timeExpireDateString: '2017-06-01T11:57:38.000Z',
        payeeNodeKey: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f934dd9ad',
        signature:
          '38ec6891345e204145be8a3a99de38e98a39d6a569434e1845c8af7205afcfcc7f425fcd1463e93c32881ead0d6e356d467ec8c02553f9aab15e5738b11f127f',
        recoveryFlag: 0,
        tags: [
          {
            tagName: 'payment_hash',
            data: '0001020304050607080900010203040506070809000102030405060708090102',
          },
          {
            tagName: 'description',
            data: 'Please consider supporting this project',
          },
        ],
        wordsTemp:
          'temp1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdpl2pkx2ctnv5sxxmmwwd5kgetjypeh2ursdae8g6twvus8g6rfwvs8qun0dfjkxaq8rkx3yf5tcsyz3d73gafnh3cax9rn449d9p5uxz9ezhhypd0elx87sjle52x86fux2ypatgddc6k63n7erqz25le42c4u4ecky03ylcqe49hhl',
      },
      {
        paymentRequest:
          'lnbc2500u1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdq5xysxxatsyp3k7enxv4jsxqzpuaztrnwngzn3kdzw5hydlzf03qdgm2hdq27cqv3agm2awhz5se903vruatfhq77w3ls4evs3ch9zw97j25emudupq63nyw24cg27h2rspfj9srp',
        coinType: 'bitcoin',
        prefix: 'lnbc2500u',
        complete: true,
        satoshis: 250000,
        millisatoshis: '250000000',
        timeExpireDate: 1496314718,
        timeExpireDateString: '2017-06-01T10:58:38.000Z',
        timestamp: 1496314658,
        timestampString: '2017-06-01T10:57:38.000Z',
        payeeNodeKey: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f934dd9ad',
        signature:
          'e89639ba6814e36689d4b91bf125f10351b55da057b00647a8dabaeb8a90c95f160f9d5a6e0f79d1fc2b964238b944e2fa4aa677c6f020d466472ab842bd750e',
        recoveryFlag: 1,
        tags: [
          {
            tagName: 'payment_hash',
            data: '0001020304050607080900010203040506070809000102030405060708090102',
          },
          {
            tagName: 'description',
            data: '1 cup coffee',
          },
          {
            tagName: 'expire_time',
            data: 60,
          },
        ],
        wordsTemp:
          'temp1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdq5xysxxatsyp3k7enxv4jsxqzpuaztrnwngzn3kdzw5hydlzf03qdgm2hdq27cqv3agm2awhz5se903vruatfhq77w3ls4evs3ch9zw97j25emudupq63nyw24cg27h2rsp6tg0jg',
      },
      {
        paymentRequest:
          'lnbc20m1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqscc6gd6ql3jrc5yzme8v4ntcewwz5cnw92tz0pc8qcuufvq7khhr8wpald05e92xw006sq94mg8v2ndf4sefvf9sygkshp5zfem29trqq2yxxz7',
        coinType: 'bitcoin',
        prefix: 'lnbc20m',
        complete: true,
        satoshis: 2000000,
        millisatoshis: '2000000000',
        timestamp: 1496314658,
        timestampString: '2017-06-01T10:57:38.000Z',
        timeExpireDate: 1496318258,
        timeExpireDateString: '2017-06-01T11:57:38.000Z',
        payeeNodeKey: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f934dd9ad',
        signature:
          'c63486e81f8c878a105bc9d959af1973854c4dc552c4f0e0e0c7389603d6bdc67707bf6be992a8ce7bf50016bb41d8a9b5358652c4960445a170d049ced4558c',
        recoveryFlag: 0,
        tags: [
          {
            tagName: 'payment_hash',
            data: '0001020304050607080900010203040506070809000102030405060708090102',
          },
          {
            tagName: 'purpose_commit_hash',
            data: '3925b6f67e2c340036ed12093dd44e0368df1b6ea26c53dbe4811f58fd5db8c1',
          },
        ],
        wordsTemp:
          'temp1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqscc6gd6ql3jrc5yzme8v4ntcewwz5cnw92tz0pc8qcuufvq7khhr8wpald05e92xw006sq94mg8v2ndf4sefvf9sygkshp5zfem29trqq8y2zpz',
      },
      {
        paymentRequest:
          'lntb20m1pvjluezhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqspp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqfpp3x9et2e20v6pu37c5d9vax37wxq72un98kmzzhznpurw9sgl2v0nklu2g4d0keph5t7tj9tcqd8rexnd07ux4uv2cjvcqwaxgj7v4uwn5wmypjd5n69z2xm3xgksg28nwht7f6zspwp3f9t',
        coinType: 'testnet',
        prefix: 'lntb20m',
        complete: true,
        satoshis: 2000000,
        millisatoshis: '2000000000',
        timestamp: 1496314658,
        timestampString: '2017-06-01T10:57:38.000Z',
        timeExpireDate: 1496318258,
        timeExpireDateString: '2017-06-01T11:57:38.000Z',
        payeeNodeKey: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f934dd9ad',
        signature:
          'b6c42b8a61e0dc5823ea63e76ff148ab5f6c86f45f9722af0069c7934daff70d5e315893300774c897995e3a7476c8193693d144a36e2645a0851e6ebafc9d0a',
        recoveryFlag: 1,
        tags: [
          {
            tagName: 'purpose_commit_hash',
            data: '3925b6f67e2c340036ed12093dd44e0368df1b6ea26c53dbe4811f58fd5db8c1',
          },
          {
            tagName: 'payment_hash',
            data: '0001020304050607080900010203040506070809000102030405060708090102',
          },
          {
            tagName: 'fallback_address',
            data: {
              code: 17,
              address: 'mk2QpYatsKicvFVuTAQLBryyccRXMUaGHP',
              addressHash: '3172b5654f6683c8fb146959d347ce303cae4ca7',
            },
          },
        ],
        wordsTemp:
          'temp1pvjluezhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqspp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqfpp3x9et2e20v6pu37c5d9vax37wxq72un98kmzzhznpurw9sgl2v0nklu2g4d0keph5t7tj9tcqd8rexnd07ux4uv2cjvcqwaxgj7v4uwn5wmypjd5n69z2xm3xgksg28nwht7f6zspeu4lw4',
      },
      {
        paymentRequest:
          'lnbc20m1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqsfpp3qjmp7lwpagxun9pygexvgpjdc4jdj85fr9yq20q82gphp2nflc7jtzrcazrra7wwgzxqc8u7754cdlpfrmccae92qgzqvzq2ps8pqqqqqqpqqqqq9qqqvpeuqafqxu92d8lr6fvg0r5gv0heeeqgcrqlnm6jhphu9y00rrhy4grqszsvpcgpy9qqqqqqgqqqqq7qqzqj9n4evl6mr5aj9f58zp6fyjzup6ywn3x6sk8akg5v4tgn2q8g4fhx05wf6juaxu9760yp46454gpg5mtzgerlzezqcqvjnhjh8z3g2qqdhhwkj',
        coinType: 'bitcoin',
        prefix: 'lnbc20m',
        complete: true,
        satoshis: 2000000,
        millisatoshis: '2000000000',
        timestamp: 1496314658,
        timestampString: '2017-06-01T10:57:38.000Z',
        timeExpireDate: 1496318258,
        timeExpireDateString: '2017-06-01T11:57:38.000Z',
        payeeNodeKey: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f934dd9ad',
        signature:
          '91675cb3fad8e9d915343883a49242e074474e26d42c7ed914655689a8074553733e8e4ea5ce9b85f69e40d755a55014536b12323f8b220600c94ef2b9c51428',
        recoveryFlag: 0,
        tags: [
          {
            tagName: 'payment_hash',
            data: '0001020304050607080900010203040506070809000102030405060708090102',
          },
          {
            tagName: 'purpose_commit_hash',
            data: '3925b6f67e2c340036ed12093dd44e0368df1b6ea26c53dbe4811f58fd5db8c1',
          },
          {
            tagName: 'fallback_address',
            data: {
              code: 17,
              address: '1RustyRX2oai4EYYDpQGWvEL62BBGqN9T',
              addressHash: '04b61f7dc1ea0dc99424464cc4064dc564d91e89',
            },
          },
          {
            tagName: 'routing_info',
            data: [
              {
                pubkey: '029e03a901b85534ff1e92c43c74431f7ce72046060fcf7a95c37e148f78c77255',
                short_channel_id: '0102030405060708',
                fee_base_msat: 1,
                fee_proportional_millionths: 20,
                cltv_expiry_delta: 3,
              },
              {
                pubkey: '039e03a901b85534ff1e92c43c74431f7ce72046060fcf7a95c37e148f78c77255',
                short_channel_id: '030405060708090a',
                fee_base_msat: 2,
                fee_proportional_millionths: 30,
                cltv_expiry_delta: 4,
              },
            ],
          },
        ],
        wordsTemp:
          'temp1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqsfpp3qjmp7lwpagxun9pygexvgpjdc4jdj85fr9yq20q82gphp2nflc7jtzrcazrra7wwgzxqc8u7754cdlpfrmccae92qgzqvzq2ps8pqqqqqqpqqqqq9qqqvpeuqafqxu92d8lr6fvg0r5gv0heeeqgcrqlnm6jhphu9y00rrhy4grqszsvpcgpy9qqqqqqgqqqqq7qqzqj9n4evl6mr5aj9f58zp6fyjzup6ywn3x6sk8akg5v4tgn2q8g4fhx05wf6juaxu9760yp46454gpg5mtzgerlzezqcqvjnhjh8z3g2qqpqa4j6',
      },
      {
        paymentRequest:
          'lnbc20m1pvjluezhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqspp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqfppj3a24vwu6r8ejrss3axul8rxldph2q7z9kmrgvr7xlaqm47apw3d48zm203kzcq357a4ls9al2ea73r8jcceyjtya6fu5wzzpe50zrge6ulk4nvjcpxlekvmxl6qcs9j3tz0469gq5g658y',
        coinType: 'bitcoin',
        prefix: 'lnbc20m',
        complete: true,
        satoshis: 2000000,
        millisatoshis: '2000000000',
        timestamp: 1496314658,
        timestampString: '2017-06-01T10:57:38.000Z',
        timeExpireDate: 1496318258,
        timeExpireDateString: '2017-06-01T11:57:38.000Z',
        payeeNodeKey: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f934dd9ad',
        signature:
          'b6c6860fc6ff41bafba1745b538b6a7c6c2c0234f76bf817bf567be88cf2c632492c9dd279470841cd1e21a33ae7ed59b25809bf9b3366fe81881651589f5d15',
        recoveryFlag: 0,
        tags: [
          {
            tagName: 'purpose_commit_hash',
            data: '3925b6f67e2c340036ed12093dd44e0368df1b6ea26c53dbe4811f58fd5db8c1',
          },
          {
            tagName: 'payment_hash',
            data: '0001020304050607080900010203040506070809000102030405060708090102',
          },
          {
            tagName: 'fallback_address',
            data: {
              code: 18,
              address: '3EktnHQD7RiAE6uzMj2ZifT9YgRrkSgzQX',
              addressHash: '8f55563b9a19f321c211e9b9f38cdf686ea07845',
            },
          },
        ],
        wordsTemp:
          'temp1pvjluezhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqspp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqfppj3a24vwu6r8ejrss3axul8rxldph2q7z9kmrgvr7xlaqm47apw3d48zm203kzcq357a4ls9al2ea73r8jcceyjtya6fu5wzzpe50zrge6ulk4nvjcpxlekvmxl6qcs9j3tz0469gq5ffj0z',
      },
      {
        paymentRequest:
          'lnbc20m1pvjluezhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqspp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqfppqw508d6qejxtdg4y5r3zarvary0c5xw7kepvrhrm9s57hejg0p662ur5j5cr03890fa7k2pypgttmh4897d3raaq85a293e9jpuqwl0rnfuwzam7yr8e690nd2ypcq9hlkdwdvycqa0qza8',
        coinType: 'bitcoin',
        prefix: 'lnbc20m',
        complete: true,
        satoshis: 2000000,
        millisatoshis: '2000000000',
        timestamp: 1496314658,
        timestampString: '2017-06-01T10:57:38.000Z',
        timeExpireDate: 1496318258,
        timeExpireDateString: '2017-06-01T11:57:38.000Z',
        payeeNodeKey: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f934dd9ad',
        signature:
          'c8583b8f65853d7cc90f0eb4ae0e92a606f89caf4f7d65048142d7bbd4e5f3623ef407a75458e4b20f00efbc734f1c2eefc419f3a2be6d51038016ffb35cd613',
        recoveryFlag: 0,
        tags: [
          {
            tagName: 'purpose_commit_hash',
            data: '3925b6f67e2c340036ed12093dd44e0368df1b6ea26c53dbe4811f58fd5db8c1',
          },
          {
            tagName: 'payment_hash',
            data: '0001020304050607080900010203040506070809000102030405060708090102',
          },
          {
            tagName: 'fallback_address',
            data: {
              code: 0,
              address: 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4',
              addressHash: '751e76e8199196d454941c45d1b3a323f1433bd6',
            },
          },
        ],
        wordsTemp:
          'temp1pvjluezhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqspp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqfppqw508d6qejxtdg4y5r3zarvary0c5xw7kepvrhrm9s57hejg0p662ur5j5cr03890fa7k2pypgttmh4897d3raaq85a293e9jpuqwl0rnfuwzam7yr8e690nd2ypcq9hlkdwdvycqawny4p',
      },
      {
        paymentRequest:
          'lnbc20m1pvjluezhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqspp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqfp4qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q28j0v3rwgy9pvjnd48ee2pl8xrpxysd5g44td63g6xcjcu003j3qe8878hluqlvl3km8rm92f5stamd3jw763n3hck0ct7p8wwj463cql26ava',
        coinType: 'bitcoin',
        prefix: 'lnbc20m',
        complete: true,
        satoshis: 2000000,
        millisatoshis: '2000000000',
        timestamp: 1496314658,
        timestampString: '2017-06-01T10:57:38.000Z',
        timeExpireDate: 1496318258,
        timeExpireDateString: '2017-06-01T11:57:38.000Z',
        payeeNodeKey: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f934dd9ad',
        signature:
          '51e4f6446e410a164a6da9f39507e730c26241b4456ab6ea28d1b12c71ef8ca20c9cfe3dffc07d9f8db671ecaa4d20beedb193bda8ce37c59f85f82773a55d47',
        recoveryFlag: 0,
        tags: [
          {
            tagName: 'purpose_commit_hash',
            data: '3925b6f67e2c340036ed12093dd44e0368df1b6ea26c53dbe4811f58fd5db8c1',
          },
          {
            tagName: 'payment_hash',
            data: '0001020304050607080900010203040506070809000102030405060708090102',
          },
          {
            tagName: 'fallback_address',
            data: {
              code: 0,
              address: 'bc1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3qccfmv3',
              addressHash: '1863143c14c5166804bd19203356da136c985678cd4d27a1b8c6329604903262',
            },
          },
        ],
        wordsTemp:
          'temp1pvjluezhp58yjmdan79s6qqdhdzgynm4zwqd5d7xmw5fk98klysy043l2ahrqspp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqfp4qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q28j0v3rwgy9pvjnd48ee2pl8xrpxysd5g44td63g6xcjcu003j3qe8878hluqlvl3km8rm92f5stamd3jw763n3hck0ct7p8wwj463cqxfgdr0',
      },
      {
        paymentRequest:
          'lnbc1230p1pwpw4vhpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdq8w3jhxaqxqrrsscqpfmmcvd29nucsnyapspmkpqqf65uedt4zvhqkstelrgyk4nfvwka38c3nlq06agjmazs9nr3uupxp6r0v0gzw4n26redc36urkqwxamqqqu7esys',
        coinType: 'bitcoin',
        prefix: 'lnbc1230p',
        complete: true,
        millisatoshis: '123',
        timestamp: 1545033111,
        timestampString: '2018-12-17T07:51:51.000Z',
        payeeNodeKey: '03e7156ae33b0a208d0744199163177e909e80176e55d97a2f221ede0f934dd9ad',
        signature:
          'def0c6a8b3e6213274300eec10013aa732d5d44cb82d05e7e3412d59a58eb7627c467f03f5d44b7d140b31c79c0983a1bd8f409d59ab43cb711d7076038ddd80',
        recoveryFlag: 0,
        tags: [
          {
            tagName: 'payment_hash',
            data: '0001020304050607080900010203040506070809000102030405060708090102',
          },
          {
            tagName: 'description',
            data: 'test',
          },
          {
            tagName: 'expire_time',
            data: 3600,
          },
          {
            tagName: 'min_final_cltv_expiry',
            data: 9,
          },
        ],
        timeExpireDate: 1545036711,
        timeExpireDateString: '2018-12-17T08:51:51.000Z',
        wordsTemp:
          'temp1pwpw4vhpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdq8w3jhxaqxqrrsscqpfmmcvd29nucsnyapspmkpqqf65uedt4zvhqkstelrgyk4nfvwka38c3nlq06agjmazs9nr3uupxp6r0v0gzw4n26redc36urkqwxamqqqumjsau',
      },
    ],
    invalid: [
      {
        paymentRequest: 4649,
        error: 'Lightning Payment Request must be string',
      },
      {
        paymentRequest: 'm1jg3xv8',
        error: 'Not a proper lightning payment request',
      },
      {
        paymentRequest:
          'lnbc2500u1PvJlUeZpP5QqQsYqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdq5xysxxatsyp3k7enxv4jsxqzpuaztrnwngzn3kdzw5hydlzf03qdgm2hdq27cqv3agm2awhz5se903vruatfhq77w3ls4evs3ch9zw97j25emudupq63nyw24cg27h2rspfj9srp',
        error:
          'Mixed-case string lnbc2500u1PvJlUeZpP5QqQsYqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdq5xysxxatsyp3k7enxv4jsxqzpuaztrnwngzn3kdzw5hydlzf03qdgm2hdq27cqv3agm2awhz5se903vruatfhq77w3ls4evs3ch9zw97j25emudupq63nyw24cg27h2rspfj9srp',
      },
      {
        paymentRequest: 'lnbc500m1jg3xv8',
        error: 'Signature is missing or incorrect',
      },
      {
        paymentRequest:
          'lnbc1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdpl2pkx2ctnv5sxxmmwwd5kgetjypeh2ursdae8g6twvus8g6rfwvs8qun0dfjkxaqnp4q0n326hr8v9zprg8gsvezcch06gfaqqhde2aj730yg0durllllll72gy6kphxuhh4a2ffwf9344ytfw98tyhvslsp9y5vt2uxdfhpucph83eqms28dyde9yxgu5ehln4zkwv04nvurxhst77vnng5s0ar9mqpm3cg0l',
        error: 'Lightning Payment Request signature pubkey does not match payee pubkey',
      },
      {
        paymentRequest:
          'ln1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq05xqmj',
        error: 'Not a proper lightning payment request',
      },
      {
        paymentRequest:
          'lnxy34m1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqxt0p4s',
        error: 'Unknown coin bech32 prefix: xy',
      },
    ],
  },
  privateKey: 'e126f68f7eafcc8b74f54d269fe206be715000f94dac067d1c04a8ca3b2db734',
};
