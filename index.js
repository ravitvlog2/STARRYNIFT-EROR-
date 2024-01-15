const { Wallet,Contract, ethers, JsonRpcProvider ,utils  } = require('ethers');
const fetch = require('node-fetch');
var fs = require("fs");
const chalk = require("chalk");
const readlineSync = require("readline-sync");
const delay=require('delay')
const abiConfig = require('./abi.js');


const randstr = (length) =>
new Promise((resolve, reject) => {
	var text = "";
	var possible =
	"1234567890";

	for (var i = 0; i < length; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	resolve(text);
});

function getRandomElementExceptThird(arr,kecualikan) {
	const indexToExclude = kecualikan; 
	const filteredArray = arr.filter((_, index) => index !== indexToExclude);

	if (filteredArray.length === 0) {
		return null;
	}

	const randomIndex = Math.floor(Math.random() * filteredArray.length);
	return filteredArray[randomIndex];
}



const aktifkanspace10menit = (authcuy) => new Promise(async (resolve, reject) => {
	for (let i = 0; i < 22; i++) {

		fetch("https://api.starrynift.art/api-v2/citizenship/citizenship-card/daily-tasks?page_size=20&page=1&active=true", {
			"headers": 
			{
				'Accept': '*/*',
				'Accept-Encoding': 'gzip, deflate, br',
				'Accept-Language': 'en-US,en;q=0.9',
				'Authorization': authcuy,
				'Connection': 'keep-alive',
				'Host': 'api.starrynift.art',
				'Origin': 'https://starrynift.art',
				'Referer': 'https://starrynift.art/',
				'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
				'sec-ch-ua-mobile': '?0',
				'sec-ch-ua-platform': '"Windows"',
				'Sec-Fetch-Dest': 'empty',
				'Sec-Fetch-Mode': 'cors',
				'Sec-Fetch-Site': 'same-site',
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
			},
			"method": "GET"
		})
		.then(res => res.json())
		.then(res => {
			console.log(chalk.green(`Space Masih Aktif`))
		})
		.catch(err => {
			reject(err)
		})

		fetch("https://api.starrynift.art/api-v2/citizenship/citizenship-card/limited-tasks?page_size=20&page=1&active=true&sceneId", {
			"headers": 
			{
				'Accept': '*/*',
				'Accept-Encoding': 'gzip, deflate, br',
				'Accept-Language': 'en-US,en;q=0.9',
				'Authorization': authcuy,
				'Connection': 'keep-alive',
				'Host': 'api.starrynift.art',
				'Origin': 'https://starrynift.art',
				'Referer': 'https://starrynift.art/',
				'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
				'sec-ch-ua-mobile': '?0',
				'sec-ch-ua-platform': '"Windows"',
				'Sec-Fetch-Dest': 'empty',
				'Sec-Fetch-Mode': 'cors',
				'Sec-Fetch-Site': 'same-site',
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
			},
			"method": "GET"
		})
		.then(res => res.json())
		.then(res => {
			console.log(chalk.green(`Space Masih Aktif`))
		})
		.catch(err => {
			reject(err)
		})

		await delay(30000)
	}
});


const buatspace = (authpemilikspace) => new Promise(async (resolve, reject) => {

	randomstr= await randstr(5)
	bodyData={"spaceName": "gaslagicuk"+randomstr,"description": "gaslagicuk"+randomstr,"coverImg": "https://d1972z59ivk5gh.cloudfront.net/upload/space_screenshot/1dQ86AwyC7RjEJK7sHqbok.jpeg","sceneId": 18,"inventoryList": [{"type": "Image_Slot_Model","url": null,"position": [-4.372263839146184,2.2519507775045646,-0.995050873113553],"rotation": [-1.4460323184165664,1.2774476384950217,1.451751603126004],"scale": [1.5,1.5,1.5],"assets": [{"type": "image","url": null }]},{"type": "Image_Slot_Model","url": null,"position": [ -3.936629147591793,2.2673667203325882,-3.50486868715198],"rotation": [-0.7338596397381771,1.1225831097226449,0.6809434966528358],"scale": [1.5,1.5,1.5],"assets": [{"type": "image","url": null}]},{"type": "Image_Slot_Model","url": null,"position": [8.308354684846776,5.678898068241632,  8.501261128834198],"rotation": [3.141592653589793,-1.1394206921007173,3.141592653589793],"scale": [2.5,2.5,2.5],"assets": [{"type": "image","url": null}]    },    {"type": "Image_Slot_Model","url": null,"position": [1.9420705785448908,3.453869575716066,-15.417947324499663],"rotation": [0,-0.30655948370801406,0],"scale": [1.5,1.5,1.5],"assets": [{"type": "image","url": null}]}],"lights": [],  "skybox": null}

	fetch("https://api.starrynift.art/api-v2/space/custom/space/create", {
		"headers": {
			'Accept': 'application/json',
			'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'en-US,en;q=0.9',
			'Authorization': authpemilikspace,
			'Connection': 'keep-alive',
			'Content-Length': '1137',
			'Content-Type': 'application/json;charset=UTF-8',
			'Host': 'api.starrynift.art',
			'Origin': 'https://starrynift.art',
			'Referer': 'https://starrynift.art/',
			'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'Sec-Fetch-Dest': 'empty',
			'Sec-Fetch-Mode': 'cors',
			'Sec-Fetch-Site': 'same-site',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
		},
		body: JSON.stringify(bodyData),
		"method": "POST"
	})

	.then(res => res.json())
	.then(res => {
		resolve(res);
	})
	.catch(err => {
		reject(err)
	})

});



const masukspace = (authcuy,scaneid,realm) => new Promise((resolve, reject) => {

	bodyData={
		"sceneId": scaneid,
		"realm": realm,
		"gm": true
	}

	fetch("https://ws.starrynift.art/enter", {
		"headers": {
			'Accept': '*/*',
			'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'en-US,en;q=0.9',
			'Authorization': authcuy,
			'Connection': 'keep-alive',
			'Content-Type': 'application/json',
			'Host': 'ws.starrynift.art',
			'Origin': 'https://starrynift.art',
			'Referer': 'https://starrynift.art/',
			'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'Sec-Fetch-Dest': 'empty',
			'Sec-Fetch-Mode': 'cors',
			'Sec-Fetch-Site': 'same-site',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
		},
		body: JSON.stringify(bodyData),
		"method": "POST"
	})
	fetch("https://api.starrynift.art/api-v2/space/custom/space/"+realm+"/detail", {
		"headers": {
			'Accept': '*/*',
			'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'en-US,en;q=0.9',
			'Authorization': authcuy,
			'Connection': 'keep-alive',
			'Content-Type': 'application/json',
			'Host': 'api.starrynift.art',
			'Origin': 'https://starrynift.art',
			'Referer': 'https://starrynift.art/',
			'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'Sec-Fetch-Dest': 'empty',
			'Sec-Fetch-Mode': 'cors',
			'Sec-Fetch-Site': 'same-site',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
		},
		"method": "GET"
	})

	.then(res => res.json())
	.then(res => {
		resolve(res);
	})
	.catch(err => {
		reject(err)
	})

});



const getdataspace = (authcuy) => new Promise((resolve, reject) => {
	fetch("https://api.starrynift.art/api-v2/space/custom/space/search?page=1&page_size=24", {
		"headers": 
		{
			'Accept': '*/*',
			'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'en-US,en;q=0.9',
			'Authorization': authcuy,
			'Connection': 'keep-alive',
			'Host': 'api.starrynift.art',
			'Origin': 'https://starrynift.art',
			'Referer': 'https://starrynift.art/',
			'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'Sec-Fetch-Dest': 'empty',
			'Sec-Fetch-Mode': 'cors',
			'Sec-Fetch-Site': 'same-site',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
		},
		"method": "GET"
	})
	.then(res => res.json())
	.then(res => {
		resolve(res);
	})
	.catch(err => {
		reject(err)
	})

});





const ping = (authcuy) => new Promise(async (resolve, reject) => {
	for (let i = 0; i < 50; i++) {

		fetch("https://api.starrynift.art/api-v2/space/online/ping", {
			"headers": 
			{
				'Accept': '*/*',
				'Accept-Encoding': 'gzip, deflate, br',
				'Accept-Language': 'en-US,en;q=0.9',
				'Authorization': authcuy,
				'Connection': 'keep-alive',
				'Host': 'api.starrynift.art',
				'Origin': 'https://starrynift.art',
				'Referer': 'https://starrynift.art/',
				'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
				'sec-ch-ua-mobile': '?0',
				'sec-ch-ua-platform': '"Windows"',
				'Sec-Fetch-Dest': 'empty',
				'Sec-Fetch-Mode': 'cors',
				'Sec-Fetch-Site': 'same-site',
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
			},
			"method": "GET"
		})
		.then(res => res.json())
		.then(res => {
			console.log(chalk.green(`sukses ping, data dari server => ${res.minutes} Minute ${res.seconds} Seconds`))
		})
		.catch(err => {
			reject(err)
		})
		await delay(29000)
	}
});






const logindangettoken = (address,signatureResult) => new Promise((resolve, reject) => {
	try{
		bodyData={
			"address": addressdaripk,
			"signature": signatureResult,
			"referralSource": 0
		}

		fetch("https://api.starrynift.art/api-v2/starryverse/auth/wallet/evm/login", {
			"headers": {
				'Accept': 'application/json',
				'Accept-Encoding': 'gzip, deflate, br',
				'Accept-Language': 'en-US,en;q=0.9',
				'Authorization': 'Bearer null', 
				'Connection': 'keep-alive',
				'Content-Type': 'application/json;charset=UTF-8',
				'Host': 'api.starrynift.art',
				'Origin': 'https://starrynift.art',
				'Referer': 'https://starrynift.art/',
				'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
				'sec-ch-ua-mobile': '?0',
				'sec-ch-ua-platform': '"Windows"',
				'Sec-Fetch-Dest': 'empty',
				'Sec-Fetch-Mode': 'cors',
				'Sec-Fetch-Site': 'same-site',
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
			},
			body: JSON.stringify(bodyData),
			"method": "POST"
		})
		.then(res => res.json())
		.then(res => {
			resolve(res);
		})
		.catch(err => {
			reject(err)
		})


	}catch(erorbos){
		console.log(chalk.red('UPS ADA EROR =>'+erorbos))
	}

});



const ambilchat = (authcuy) => new Promise((resolve, reject) => {
	fetch("https://api.starrynift.art/api-v2/starryverse/chat/history", {
		"headers": {
			"accept": "application/json",
			"accept-language": "en-US,en;q=0.9",
			"authorization": authcuy,
			"content-type": "application/json;charset=UTF-8",
			"sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"Windows\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site",
			"Referer": "https://starrynift.art/",
			"Referrer-Policy": "strict-origin-when-cross-origin"
		},
		"body": "{\"sceneId\":15,\"realm\":\"The All Nexus\",\"roomId\":\"BVx_p0fkl\"}",
		"method": "POST"
	})
	.then(res => res.json())
	.then(res => {
		resolve(res);
	})
	.catch(err => {
		reject(err)
	})
});




const lakukanfollow = (authcuy,targetfollow) => new Promise((resolve, reject) => {

	fetch("https://api.starrynift.art/api-v2/starryverse/user/follow", {
		"headers": {
			"accept": "application/json",
			"accept-language": "en-US,en;q=0.9",
			"authorization": authcuy,
			"content-type": "application/json;charset=UTF-8",
			"sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"Windows\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site",
			"Referer": "https://starrynift.art/",
			"Referrer-Policy": "strict-origin-when-cross-origin"
		},
		"body": `{\"userId\":\"${targetfollow}\"}`,
		"method": "POST"
	})
	.then(res => res.json())
	.then(res => {
		resolve(res);
	})
	.catch(err => {
		reject(err)
	})
});


const dailyclaim = (authcuy,hash) => new Promise(async (resolve, reject) => {

	bodyData={
		"txHash": hash
	}



	fetch("https://api.starrynift.art/api-v2/webhook/confirm/daily-checkin/checkin", {
		"headers": {
			'Accept': 'application/json',
			'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'en-US,en;q=0.9',
			'Authorization': authcuy,
			'Connection': 'keep-alive',
			'Content-Length': '79',
			'Content-Type': 'application/json;charset=UTF-8',
			'Host': 'api.starrynift.art',
			'Origin': 'https://starrynift.art',
			'Referer': 'https://starrynift.art/',
			'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'Sec-Fetch-Dest': 'empty',
			'Sec-Fetch-Mode': 'cors',
			'Sec-Fetch-Site': 'same-site',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
		},
		body: JSON.stringify(bodyData),
		"method": "POST"
	})

	.then(res => res.json())
	.then(res => {
		console.log(res)
		resolve(res);
	})
	.catch(err => {
		reject(err)
	})

});









(async () => {

	console.log(chalk.green(`
		=======================================================================================
		MENU
		1. FOLLOW + JOIN 5 SPACE ORANG + BKIN SPACE & MASUKIN 10 USER KE SPACE KITA
		2. FOLLOW + JOIN 5 SPACE ORANG 

		=======================================================================================
		`))
	var menu = readlineSync.question('MASUKAN NOMOR MENU ANDA :');
	if(menu==1){


		while(true){
			var listakunxxx = fs.readFileSync("pk.txt", "utf-8").split("\n");
			var listakun = listakunxxx.map(line => line.replace(/\r/g, ''));
			var listtokenresult = []
			for (var index = 0; index < listakun.length; index++) {

				const privatekey = listakun[index]
				const wallet = new Wallet(privatekey);
				addressdaripk = wallet.address
				console.log(chalk.green('AKUN '+addressdaripk))
				const nonceData = `Welcome!

				This request will not trigger a blockchain transaction or cost any gas fees.

				Your authentication status will be reset after 7 days.

				Wallet address:
				${addressdaripk}

				Nonce:
				${await randstr(5)}
				`;
				const signatureResult = await wallet.signMessage(nonceData);
				tokenresult = await logindangettoken(addressdaripk,signatureResult)
				authcuy='Bearer '+tokenresult.token
				listtokenresult.push(authcuy)

				let ambildatachat =await ambilchat(authcuy)
				var list = [];
				var uniqueValues = [];
				for (var indexx = 0; indexx < ambildatachat.length; indexx++) {
					var nilaiSaatIni = ambildatachat[indexx].from.uid;
					if (!uniqueValues.includes(nilaiSaatIni)) {
						list.push(nilaiSaatIni);
						uniqueValues.push(nilaiSaatIni);
					}
				}
				targetfollow = list[0]
				let followbos = await lakukanfollow(authcuy,targetfollow)
				if (followbos.ok ==1) {
					console.log(chalk.green('Sukses Follow => https://starrynift.art/@'+targetfollow ))
				}else{
					console.log(chalk.red('Target Sudah Pernah Di Follow'))
					index = index-1
				}
				console.log(chalk.green('================================'))

			}

			console.log(chalk.magenta('============================================'))
			console.log(chalk.magenta('SEMUA FOLLOW SEMUA LANJUTKAN KE Online 10 menit , KITA LANJUT MASUK 5 SPACE'))
			console.log(chalk.magenta('============================================\n\n'))


			for (var indexakunmasukspace = 0; indexakunmasukspace < listtokenresult.length; indexakunmasukspace++) {
				authcuy=listtokenresult[indexakunmasukspace]
				console.log(chalk.green('CARI SPACE..'))
				resultdataspace =   await getdataspace(authcuy)
				for (var indexmasukspace = 0; indexmasukspace < 7; indexmasukspace++) {
					try{
						scaneid=resultdataspace.items[indexmasukspace].sceneId
						realm = resultdataspace.items[indexmasukspace].id
						namaroom=resultdataspace.items[indexmasukspace].spaceName
						masukcuyspace = await masukspace(authcuy,scaneid,realm)
						if (masukcuyspace.room.processId!==null) {
							prosesid = masukcuyspace.room.processId
							console.log(chalk.green('SUKSES JOIN ROOM =>'+namaroom))
						}
						await delay(1000)

					}catch(erorkuiy){
						console.log(chalk.red('UPS EROR Saat Masuk Space =>'+erorkuiy))
					}

				}
				console.log(chalk.magenta('=====================================\n'))

			}

			console.log(chalk.magenta('============================================'))
			console.log(chalk.magenta('SELESAI MASUK 5 SPACE, KITA LANJUT CREATE SPACE + AJAK 5 ORANG JOIN'))
			console.log(chalk.magenta('============================================\n\n'))

			for (var indexbkinspace = 0; indexbkinspace < listtokenresult.length; indexbkinspace++) {
				try{
					authpemilikspace=listtokenresult[indexbkinspace]
					console.log(chalk.green('BUAT SPACE...'))
					resultbuatspace = await buatspace(authpemilikspace)
					aktifkanspace10menit(authpemilikspace)
					if (resultbuatspace.id !== null) {
						for (var i = 0; i < 10; i++) {
							console.log(chalk.green('PILIH RANDOM WALLET UNTUK MASUK KE SPACE '+resultbuatspace.spaceName))
							let pilihrandomuseruntuklogin = getRandomElementExceptThird(listtokenresult,indexbkinspace);
							authcuy=listtokenresult[pilihrandomuseruntuklogin]
							scaneid=resultbuatspace.sceneId
							realm= resultbuatspace.id
							masukcuyspace = await masukspace(authcuy,scaneid,realm)
							if (masukcuyspace.room.processId!==null) {
								sesiid = masukcuyspace.room.sessionId
								console.log(chalk.green('AKUN KE '+i+' SUKSES JOIN ROOM KITA , SESSION =>'+sesiid))
							}
							await delay(1000)
						}

					}else{
						console.log('gagal buat space')
					}
				}catch(erorok){
					console.log(chalk.red('EROR SAAT CREATE ROOM+AJAK 5 ORANG=> '+erorok))
				}
			}

			console.log(chalk.magenta('============================================'))
			console.log(chalk.magenta('ALL DONE, JIKA MASIH ADA BOT RUNNING BERARTI ITU YG ONLINE 10 MENIT BIARIN AJA :V'))
			console.log(chalk.magenta('============================================\n\n'))


			await delay(86460000)
		}
	}



	else if(menu==2){


		while(true){
			var listakunxxx = fs.readFileSync("pk.txt", "utf-8").split("\n");
			var listakun = listakunxxx.map(line => line.replace(/\r/g, ''));
			var listtokenresult = []



			// for (var index = 0; index < listakun.length; index++) {
				index =0

				const privatekey = listakun[index]
				
				const RPC_URL = 'https://bsc-dataseed2.ninicoin.io';
				const bscProvider = new JsonRpcProvider(RPC_URL);

				const wallet = new Wallet(privatekey, bscProvider);
				addressdaripk = wallet.address
				console.log(chalk.green('AKUN '+addressdaripk))
				const nonceData = `Welcome!

				This request will not trigger a blockchain transaction or cost any gas fees.

				Your authentication status will be reset after 7 days.

				Wallet address:
				${addressdaripk}

				Nonce:
				${await randstr(5)}
				`;
				const signatureResult = await wallet.signMessage(nonceData);
				tokenresult = await logindangettoken(addressdaripk,signatureResult)
				authcuy='Bearer '+tokenresult.token

				 //LAKUKAN CLAIM DAILY

				 const contractAccess = new Contract(abiConfig[1].address, abiConfig[1].abi, wallet);
				 const checkInResult = await contractAccess.checkIn(1);
				 console.log(checkInResult)
				 hash = checkInResult.hash

				 console.log(chalk.green('Claim Daily'))
				 console.log('tunggu 30 detik ')
				 await delay(30000)
				 resultdailyclaim = await dailyclaim(authcuy,hash)



				 listtokenresult.push(authcuy)
				 let ambildatachat =await ambilchat(authcuy)
				 var list = [];
				 var uniqueValues = [];
				 for (var indexx = 0; indexx < ambildatachat.length; indexx++) {
				 	var nilaiSaatIni = ambildatachat[indexx].from.uid;
				 	if (!uniqueValues.includes(nilaiSaatIni)) {
				 		list.push(nilaiSaatIni);
				 		uniqueValues.push(nilaiSaatIni);
				 	}
				 }

				 targetfollow = list[0]
				 let followbos = await lakukanfollow(authcuy,targetfollow)
				 if (followbos.ok ==1) {
				 	console.log(chalk.green('Sukses Follow => https://starrynift.art/@'+targetfollow ))
				 }else{
				 	console.log(chalk.red('Target Sudah Pernah Di Follow'))
				 	index = index-1
				 }
				 console.log(chalk.green('================================'))

			// }




			// resultdataspace=[
			// {
			// 	"sceneId": 23,
			// 	"realm": "p7UT3u6oxnJuCh448GXL1A",
			// },
			// {
			// 	"sceneId": 21,
			// 	"realm": "dn3gyNmKqGdWoni3BtAUZz",
			// },
			// {
			// 	"sceneId": 23,
			// 	"realm": "cDctNo5KrotdAc7vUkqMew",
			// },
			// {
			// 	"sceneId": 18,
			// 	"realm": "9iDRm7cYy3AftAWaHwhCBx",
			// },
			// {
			// 	"sceneId": 18,
			// 	"realm": "uYXWUghdLkfhur12eYnYFX",
			// }
			// ]

			// for (var indexmasukspace = 0; indexmasukspace < resultdataspace.length; indexmasukspace++) {

			// 	scaneid=resultdataspace[indexmasukspace].sceneId
			// 	realm = resultdataspace[indexmasukspace].realm
			// 	masukcuyspace = await masukspace(authcuy,scaneid,realm)
			// 	console.log(masukcuyspace)
			// 	console.log(chalk.green('TUNGGU 1 MENIT'))
			// 	await delay(60000)

			// }

			// console.log(chalk.magenta('============================================'))
			// console.log(chalk.magenta('ALL DONE, JIKA MASIH ADA BOT RUNNING BERARTI ITU YG ONLINE 10 MENIT BIARIN AJA :V'))
			// console.log(chalk.magenta('============================================\n\n'))


			await delay(86460000)
		}

	}
})();
