var translations = {
  'English': {
    'title': 'EtherDelta',
    'description': 'EtherDelta is a decentralized trading platform for Ethereum tokens.',
    'announcements': 'Announcements',
    'order_book': 'Order book',
    'follow_twitter': 'Follow us on Twitter',
    'chat': 'Chat',
    'send': 'Send',
    'volume': 'Volume',
    'pair': 'Pair',
    'produced_etherboost': 'Produced by Etherboost',
    'etherdelta_desc': 'EtherDelta &#8212; decentralized token exchange',
    'etheropt_desc': 'Etheropt &#8212; decentralized options exchange',
    'predictiontoken_desc': 'PredictionToken &#8212; prediction market tokens',
    'ethereumdollar_desc': 'EthereumDollar &#8212; stable dollar token',
    'toggle_navigation': 'Toggle navigation',
    'name': 'Name',
    'divisor': 'Divisor',
    'go': 'Go',
    'add_account': 'Add account',
    'address': 'Address',
    'private_key': 'Private key',
    'buy': 'Buy',
    'sell': 'Sell',
    'amount_to_buy': 'Amount to buy',
    'amount_to_sell': 'Amount to sell',
    'price': 'Price',
    'total': 'Total',
    'order': 'Order',
    'number_of_blocks': 'Number of blocks',
    'expires': 'Expires',
    'balances': 'Balances',
    'balance': 'Balance',
    'token': 'Token',
    'aug032016': 'August 3, 2016',
    'aug032016_announcement': 'EtherDelta has moved to a new smart contract. Go to the bottom of the page and switch to the old one if you have a balance there you need to withdraw.',
    'new_account': 'New account',
    'import_account': 'Import account',
    'export_private_key': 'Export private key',
    'forget_account': 'Forget account',
    'forget_all_accounts': 'Forget all accounts',
    'reset_cache': 'Reset cache',
    'deposit': 'Deposit',
    'withdraw': 'Withdraw',
    'transfer': 'Transfer',
    'balance_in_your_wallet': 'Wallet',
    'balance_etherdelta': 'EtherDelta',
    'amount': 'Amount',
    'other': 'Other',
    'other_token': 'Other token',
    'other_base': 'Other base',
    'connection': 'Connection',
    'connect_using': 'Connect using',
    'testnet': 'TESTNET',
    'metamask': 'MetaMask',
    'mist_browser': 'Mist Browser',
    'toggle_dropdown': 'Toggle dropdown',
    'fees': 'Fees',
    'connect_ethereum': 'Connect to Ethereum',
    'deposit_withdraw': 'Deposit and withdraw',
    'trade': 'Trade',
    'transaction': 'Transaction',
    'fee': 'Fee',
    'maker': 'Maker',
    'taker': 'Taker',
    'maker_vs_taker': 'Maker vs taker',
    'need_help': 'Need help? Join the',
    'chat_gitter': 'Chat on Gitter',
    'only_fee_taker': 'The only fee is a Taker fee. Deposit, withdraw, and maker transactions are all free.',
    'maker_fee_desc': 'A maker order is one that rests in the order book ("resting order"). To create a maker order, fill out the "Buy" or "Sell" form. Once you click "Buy" or "Sell," you will see your order appear in the order book. These orders are always free. This is to encourage market makers to add liquidity to the order book.',
    'taker_fee_desc': 'A taker order is one that trades against a resting order. To create a taker order, pick an existing order from the order book, and click "Buy" or "Sell." A popup window will appear. Decide how much of the order you want to trade, and then click "Buy" or "Sell." These orders charge a fee of 0.30%.',
    'three_ways_connect': 'There are three ways you can connect to the Ethereum network.',
    'connect_metamask': 'Connect to the Ethereum network through <a href="https://metamask.io">MetaMask</a>. MetaMask is a Chrome plugin that lets you manage your Ethereum accounts and sign transactions on a case by case basis. If you are using MetaMask, your MetaMask account will automatically appear in the account dropdown.',
    'connect_mist': 'Connect to Ethereum via the Mist browser. The only downside to doing this is that you will have to unlock your account manually in order to broadcast resting orders (other transactions will work). Mist will eventually support the eth.sign() function that is needed to individually approve resting orders, but for now you will need to unlock your account manually by running <code>geth attach</code> and then <code>personal.unlockAccount("0xYOUR_ETHEREUM_ACCOUNT")</code> from the command line.',
    'connect_etherscan': 'Connect to Ethereum through the Etherscan API. This is the default option if you don\'t have MetaMask or Mist. You will need to create a new account by clicking "Create account" under the address dropdown. You should export the private key and write it down by clicking "Export private key" under the address dropdown. If you prefer, you can also use <a href="http://www.myetherwallet.com/" target="_blank">MyEtherWallet</a> to create a new Ethereum account, then use "Import account" to add your new address and its private key.',
    'deposit_withdraw_1': 'In the top left, you will find two dropdowns you can use to select the currency pair you want to trade. For example, select "MKR" and "ETH" to trade the "MKR/ETH" currency pair.',
    'deposit_withdraw_2': 'Under "Balances," you will see your balance for each of the two currencies you selected. This is the balance you have deposited to EtherDelta from your Ethereum account.',
    'deposit_withdraw_3': 'To deposit, withdraw, or transfer, scroll to the bottom of the page. Find the "Balances" section.',
    'deposit_withdraw_4': 'To deposit, click the "Deposit" tab, pick a token, enter an amount you would like to deposit from your Ethereum account into EtherDelta, and click "Deposit."',
    'deposit_withdraw_5': 'To withdraw, use the "Withdraw" tab.',
    'deposit_withdraw_6': 'To transfer tokens from your Ethereum address to another Ethereum address, use the "Transfer" tab.',
    'deposit_withdraw_7': 'Once the Ethereum transaction has been confirmed, your balance will automatically update. If you don\'t have the necessary funds available for the deposit or withdraw transaction, then the Ethereum transaction will fail.',
    'trade_1': 'In the top left, you will find two dropdowns you can use to select the currency pair you want to trade. For example, select "MKR" and "ETH" to trade the "MKR/ETH" currency pair.',
    'trade_2': 'If you want to trade a token that doesn\'t appear in the list, you can choose "Other" and fill out the form. Different tokens have different multipliers, so fill out this form carefully.',
    'trade_3': 'EtherDelta supports resting orders (adding liquidity) and trading against existing resting orders (taking liquidity).',
    'trade_4': 'To create a resting order, fill out the "Buy" or "Sell" form at the top of the page. The order expires in the number of blocks you specify (1 block &#8776; 15 seconds).',
    'trade_5': 'If you need to cancel your order, you can click your order in the order book and press the "Cancel" button. This will send an Ethereum transaction that will, once confirmed, cancel your order. Note that this will cost gas (Ethereum transaction fee), whereas placing a resting order and letting it expire does not cost gas.',
    'trade_6': 'When you submit a resting order, it gets broadcast to the world. The current broadcast channel is a Gitter chat room, but EtherDelta also supports using Ethereum events as a fallback broadcast mechanism.',
    'trade_7': 'The GUI scans for new orders being broadcast and displays them in the order book (offers on the left, bids on the right).',
    'trade_8': 'A resting order represents a cryptographically signed intent to trade. Up until your order expires or is cancelled, anyone who has seen it can trade against it, assuming both traders have enough funds in their EtherDelta accounts. The GUI filters out orders that do not have funds to back them up. Partial fills are supported.',
    'trade_9': 'To trade against an existing resting order, click "Buy" or "Sell" next to it in the order book and type in the volume you want to trade. The GUI will do one last check that the trade can cross (the funds are there and the order hasn\'t already traded), but if someone submits a transaction right before you do, your Ethereum transaction will fail because the order already traded.',
    'offers': 'Offers',
    'bids': 'Bids',
    'no_orders': 'There are no orders here. You might need to',
    'no_orders_reset': 'reset the cache',
    'order_details': 'Order details',
    'expires_in': 'Expires in',
    'Block': 'Block',
    'block': 'block',
    'blocks': 'blocks',
    'expired': 'Expired',
    'order_will_refresh': 'This order will refresh when it expires unless you press',
    'stop': 'Stop',
    'or_refresh': 'or refresh/close the page.',
    'you_can': 'You can',
    'cancel': 'Cancel',
    'cancel_blockchain': 'this order with a blockchain transaction.',
    'sell_order': 'Sell order',
    'buy_order': 'Buy order',
    'trades': 'Trades',
    'auto_refresh': 'Auto refresh',
    'my_transactions': 'My transactions',
    'type': 'Type',
    'question_mark': '???',
    'pending': 'Pending',
  },
  'Chinese (中文)': {
    'title': 'EtherDelta',
    'description': 'EtherDelta是无中心的以太坊交易平台。',
    'announcements': '公告',
    'order_book': '订单簿',
    'follow_twitter': '跟Twitter',
    'chat': '聊',
    'send': '发送',
    'volume': '卷',
    'pair': '名称',
    'produced_etherboost': 'Etherboost制作',
    'etherdelta_desc': 'EtherDelta &#8212; 无中心交易',
    'etheropt_desc': 'Etheropt &#8212; 无中心期权交易',
    'predictiontoken_desc': 'PredictionToken &#8212; 预测市场币',
    'ethereumdollar_desc': 'EthereumDollar &#8212; 稳定美元币',
    'toggle_navigation': '切换导航',
    'name': '币名称',
    'divisor': '除数',
    'go': '提交',
    'add_account': '添加账号',
    'address': '地址',
    'private_key': '密钥',
    'buy': '买',
    'sell': '卖',
    'amount_to_buy': '买的量',
    'amount_to_sell': '卖的量',
    'price': '价格',
    'total': '总量',
    'order': '下单',
    'number_of_blocks': '到期块数量',
    'expires': '到期块数量',
    'balances': '余额',
    'balance': '余额',
    'token': '币',
    'aug032016': '2016年8月3日',
    'aug032016_announcement': 'EtherDelta迁移到了新的智能合约。如果你要提取余额，请到本页底部转成旧的。',
    'new_account': '新账号',
    'import_account': '导入账号',
    'export_private_key': '导出私钥',
    'forget_account': '忘记账号',
    'forget_all_accounts': '忘记所有账号',
    'reset_cache': '重设缓存',
    'deposit': '充值',
    'withdraw': '提取',
    'transfer': '转移',
    'balance_in_your_wallet': '钱包',
    'balance_etherdelta': 'EtherDelta',
    'amount': '数量',
    'other': '其它币',
    'other_token': '其它币',
    'other_base': '其它币基',
    'connection': '连接',
    'connect_using': '连接采用',
    'testnet': 'TESTNET',
    'metamask': 'MetaMask',
    'mist_browser': 'Mist Browser',
    'toggle_dropdown': '转换',
    'fees': '收费',
    'connect_ethereum': '连接以太坊',
    'deposit_withdraw': '充值和提取',
    'trade': '交易',
    'transaction': '交易',
    'fee': '收费',
    'maker': 'Maker',
    'taker': 'Taker',
    'maker_vs_taker': 'Maker 与 Taker',
    'need_help': 'Need help? Join the',
    'chat_gitter': 'Chat on Gitter',
    'only_fee_taker': '只有Taker收费. 充值，提取，和Maker交易免费。',
    'maker_fee_desc': 'Maker订单在订单记录中待定("resting order")。要创建一个Maker订单, 请填“买”或“卖”表格。点了“买”或“卖”的按钮以后，你就可以在下面的订单记录中看到你的订单 。这些订单都是免费的。免费是为了鼓励市场中Maker增加流动性。',
    'taker_fee_desc': 'Taker订单是与"resting order"交易。要创建一个Taker订单，请从订单记录中选一个已有的订单，按“买”或“卖”。接下来有一个小窗会弹出，输入你的交易数量，再按“买”或“卖”。这些交易收0.30%的费用。',
    'three_ways_connect': '连接以太坊有三种方式',
    'connect_metamask': '通过 <a href="https://metamask.io">MetaMask</a>. MetaMask是Chrome浏览器plugin。可以用它管理你的以太坊账号，给你的交易签名。如果你用MetaMask, 你的MetaMask账号自动出现在账号下拉列表里。',
    'connect_mist': '通过Mist浏览器。这种方式唯一的缺点是： 你要手动解锁你的账号，以便扩散“待定下单”（其它交易可以完成）。Mist最终会支持eth.sign()，需要这个函数来分个批准“待定下单”，但是现在你要通过命令行执行<code>geth attach</code> 并且 执行<code>personal.unlockAccount("0x你的以太坊账号")</code>手动解锁。',
    'connect_etherscan': '通过以太坊API。如果你没有MetaMask或Mist，这是缺省设置。你需要点击“地址”下拉列表“创建账号”创建一个新账号。你要点击“地址”下拉列表“导出私钥”，导出私钥并写下来。你也可以倾向使用<a href="http://www.myetherwallet.com/" target="_blank">MyEtherWallet</a>创建新的以太坊账号，然后用“导入账号”来添加你的新地址和私钥。',
    'deposit_withdraw_1': '在左上角，你可以找到两个下拉列表来选择币对进行交易。例如， 选择“MKR”和“ETH”来交易“MKR/ETH”币对。',
    'deposit_withdraw_2': '在“余额”下面，你可以看到两种币的各自的余额，这是从你的以太坊账号充值的余额。',
    'deposit_withdraw_3': '要“充值”，“提取”，或“转移”，在本页的底部，找到“余额”区域。',
    'deposit_withdraw_4': '充值点“充值”，选择一种币，输入从以太坊账号进入EtherDelta的充值数量，再点“充值”。',
    'deposit_withdraw_5': '提取点“提取”',
    'deposit_withdraw_6': '要将币从你的以太坊账号转到另一个以太坊账号，点“转移”。',
    'deposit_withdraw_7': '一旦以太坊交易通过验证，你的余额就会自动更新。如果币值不足，充值和提取就会失败。',
    'trade_1': '在左上角，你可以找到两个下拉列表来选择币对进行交易。例如， 选择“MKR”和“ETH”来交易“MKR/ETH”币对。',
    'trade_2': '如果你要交易的币种不在列表中，你可以选择“其它币”和填表。不同的币种乘数不同，请小心填表。',
    'trade_3': 'EtherDelta支持“待定下单”（resting order）来增加流动性，以及交易“待定下单”来减少流动性。',
    'trade_4': '要创建“待定下单”，在本页的开头输入“买”或“卖”。该订单会在你指定的块数到期（一块包含15秒）。',
    'trade_5': '要取消订单，你可以点订单记录中的订单，再点“取消”按钮。这样会寄出一个以太坊交易，经过验证后，订单会取消。注意这个要消耗gas（以太坊交易费）。但是订一个“待定下单”，让它到期不会消耗gas。',
    'trade_6': '但你提交了一个“待定下单”后，它会广播到全球。现在的传播渠道是Gitter聊天室，但是EtherDelta也支持以太坊事件机制，用来保底。',
    'trade_7': '页面会扫描新的在广播中的订单，并在定记录中显示（报价在左，竞价在右）。',
    'trade_8': '“待定下单”代表加密签名过的交易意向。在你的订单过期或取消以前，看见这个订单的任何人可以与它交易（前提是双方账号中有足够的币）。页面会过滤掉币的数量不够的订单。订单也可以部分成交。',
    'trade_9': '要和已有的“待定下单”交易，点订单记录中“待定下单”的“买”或“卖”，并输入你要交易的数量。本页会再做最后的成交检查，确定有足够的币，并且订单没有被交易掉。如果别人比你先提交，你的以太坊交易会失败，因为订单已经交易了。',
    'offers': '报价',
    'bids': '竞价',
    'no_orders': '这里没有显示订单。你可以试下',
    'no_orders_reset': '重设缓存',
    'order_details': '下单明细',
    'expires_in': '到期块数',
    'Block': '块',
    'block': '块',
    'blocks': '块',
    'expired': 'Expired',
    'order_will_refresh': '这单到期会刷新，除非你按',
    'stop': '停止',
    'or_refresh': '或刷新/关闭本页。',
    'you_can': '你可以',
    'cancel': '取消',
    'cancel_blockchain': '取消这单区块链交易。',
    'sell_order': '卖单',
    'buy_order': '买单',
    'trades': '交易',
    'auto_refresh': '自动刷新',
    'my_transactions': '我的交易',
    'or': '或',
    'type': '类型',
    'question_mark': '???',
    'pending': '待定',
  },
};

module.exports = translations;
