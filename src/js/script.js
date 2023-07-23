window.onload = function() {
	var form = document.querySelector('form');
	form.classList.add('animate');

	var labels = document.querySelectorAll('label');
	labels.forEach(function(label) {
		label.classList.add('animate');
	});

	var inputs = document.querySelectorAll('.input');
	inputs.forEach(function(input) {
		input.classList.add('animate');
	});

	var button = document.querySelector('.btn1');
	button.classList.add('animate');
};






function calcularOrcamento() {
	// Obter o valor total
	var valorTotal = parseFloat(document.getElementById('valor').value);
  
	// Redirecionar para a página de resultado com o resultado como parâmetro de URL
	window.location.href = "resultado.php?valorTotal=" + valorTotal;
  }

  document.addEventListener("DOMContentLoaded", function() {
	var urlParams = new URLSearchParams(window.location.search);
	var valorTotal = parseFloat(urlParams.get("valorTotal"));
	var indicacao = "";
  
	// Declarar as variáveis
	var processador, placaVideo, placaMae, memoriaRam, ssd, fonte, airCooler;
	var linkProcessador, linkPlacaVideo, linkPlacaMae, linkMemoriaRam, linkSSD, linkFonte, linkAirCooler;
  
	// Verificar o valor total
	if (valorTotal > 1500 && valorTotal <= 2499) {
		processador = 'Intel i3-10100f';
		linkProcessador ='https://www.kabum.com.br/produto/129960/processador-intel-core-i3-10100f-3-6ghz-4-3ghz-max-boost-cache-6mb-quad-core-8-threads-lga-1200-bx8070110100f?gclid=CjwKCAjwsvujBhAXEiwA_UXnAFXi5_28qXyNPtbRjdFq70SCBVSlBPM6ZkzS_hy0XCDXqLKZVxTTYBoCuG0QAvD_BwE'
		placaVideo = 'Radeon RX 550 4gb';
		linkPlacaVideo = 'https://www.pichau.com.br/placa-de-video-mancer-radeon-rx-550-4gb-gddr5-128-bit-mcr-rx5504gd5-v4?gclid=CjwKCAjwsvujBhAXEiwA_UXnAJM7DsuFmXxhiDKd-_SMMntl4Ud-6QRhpcqteM8ZoRABuvsXvl1zdBoCH-cQAvD_BwE'
		placaMae = 'MSI H310M PRO';
		linkPlacaMae = 'https://www.kabum.com.br/produto/430926/placa-mae-msi-h310m-pro-vdh-intel-1151-m-atx-ddr4-h310m-pro-vdh?gclid=CjwKCAjwsvujBhAXEiwA_UXnAGAkyhiIDeSv_GbFFCMhPZEUP-9s6RzFmiqjHvGVqJVX828b3Fl9ehoCkbwQAvD_BwE'
		memoriaRam = 'Husky gaming 8gb 3200mhz';
		linkMemoriaRam = 'https://www.kabum.com.br/produto/162664/memoria-gamer-husky-gaming-avalanche-8gb-3200mhz-ddr4-cl19-preto-hgmf007?gclid=CjwKCAjwsvujBhAXEiwA_UXnAAXUDOJljIP5eQ47m_2_iZA2t0MAAmoSSSKDY2z3-Nh44Fl-98slsRoCP5gQAvD_BwE'
		ssd = '128GB Husky Gaming';
		linkSSD = 'https://www.kabum.com.br/produto/113888/ssd-128-gb-husky-gaming-2-5-sata-iii-leitura-570mb-s-e-gravacao-500mb-s-preto-hgml000?gclid=CjwKCAjwsvujBhAXEiwA_UXnAIGpUko1JCCWXcewb3DYkx5xTKbEWZKVY-JGsNdyTRvAarce8B5bDxoCF1oQAvD_BwE'
		fonte = 'Mancer 500w';
		linkFonte = 'https://www.pichau.com.br/fonte-mancer-thunder-500w-80-plus-bronze-mcr-thr500-bl01-oem?gclid=CjwKCAjwsvujBhAXEiwA_UXnAGe0lkjfVgDKLk7mbTXipSn_79KrzknYR2tHtHTocaygVqVptTdNQBoCTW8QAvD_BwE'
		airCooler = 'Cooler Box Padrão';
		
		
	  }
	else if (valorTotal > 2499 && valorTotal <= 3999) {
		processador = 'Ryzen 5 5600';
		linkProcessador = 'https://www.kabum.com.br/produto/320798/processador-amd-ryzen-5-5600-3-5ghz-4-4ghz-max-turbo-cache-35mb-am4-sem-video-100-100000927box?gclid=CjwKCAjwsvujBhAXEiwA_UXnALVRg3e5QzDWBbwOTIGU268tx2ZaSVZ9EnTUWrYFbyNUCyD7hnZlZRoCM7wQAvD_BwE'
		placaVideo = 'RTX 2060 8gb';
		linkPlacaVideo = 'https://www.pichau.com.br/placa-de-video-mancer-rtx-2060-super-heimdall-ss-8gb-gddr6-256-bit-mcr-rtx2060super-hmdllss?gclid=CjwKCAjwsvujBhAXEiwA_UXnAMhHeDRzXrhXBohw3U9rLTMfgshXrGnteCglGVvruhqvMFPysgDDYhoCxqsQAvD_BwE'
		placaMae = 'A520M';
		linkPlacaMae = 'https://www.pichau.com.br/placa-mae-mancer-a520m-dbrd-ddr4-socket-am4-m-atx-chipset-amd-a520-mcr-a520m-dbrd?gclid=CjwKCAjwsvujBhAXEiwA_UXnAESb0zE5ZoKShAG64MTkhbkU63sjMdsnTuCeo2KbkbsGa6MJ7LlIUhoCVDsQAvD_BwE'
		memoriaRam = 'Kingston Fury 2x8gb 3200mhz';
		linkMemoriaRam = 'https://www.kabum.com.br/produto/193500/memoria-kingston-fury-beast-16gb-2x8gb-3200mhz-ddr4-cl16-preto-kf432c16bbk2-16?gclid=CjwKCAjwsvujBhAXEiwA_UXnAGY9hLw70Q3y4fLvh8QxlrbiqrzTO0uyDamfGfybufFrRKqzLEUkmRoCUQQQAvD_BwE'
		ssd = '500GB Kingston NV2';
		linkSSD = 'https://www.kabum.com.br/produto/380744/ssd-500-gb-kingston-nv2-m-2-2280-pcie-nvme-leitura-3500-mb-s-e-gravacao-2100-mb-s-snv2s-500g?gclid=CjwKCAjwsvujBhAXEiwA_UXnAGMaXj72RcsDGqUOAjbQCZcxUSDbAg4-8Z2WoEFro--G42m5uh4alxoCJY0QAvD_BwE'
		fonte = 'MSI 600W';
		linkFonte = 'https://www.kabum.com.br/produto/369655/fonte-msi-mag-a600dn-atx-600w-80-plus-pfc-ativo-entrada-bivolt-preto-306-7zp6b22-809?gclid=CjwKCAjwsvujBhAXEiwA_UXnAMoKfGYX5eJoZxZhahh64VjoV8VODe2rGiUKRb3_8EdrBn4kOnSDwBoC8_EQAvD_BwE'
		airCooler = 'Gammax GTE V2';
		linkAirCooler = 'https://www.amazon.com.br/Cooler-Processador-Gammaxx-Vermelho-DeepCool/dp/B086WNPXVP/ref=asc_df_B086WNPXVP/?tag=googleshopp00-20&linkCode=df0&hvadid=379698997135&hvpos=&hvnetw=g&hvrand=5662435777343971577&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001552&hvtargid=pla-910644090902&psc=1'
	  }
	 else if (valorTotal > 3999 && valorTotal <= 5999) {
		  processador = 'Ryzen 5 5600';
		  linkProcessador = 'https://www.kabum.com.br/produto/320798/processador-amd-ryzen-5-5600-3-5ghz-4-4ghz-max-turbo-cache-35mb-am4-sem-video-100-100000927box?gclid=CjwKCAjwsvujBhAXEiwA_UXnALVRg3e5QzDWBbwOTIGU268tx2ZaSVZ9EnTUWrYFbyNUCyD7hnZlZRoCM7wQAvD_BwE'
		  placaVideo = 'RTX 3060';
		  linkPlacaVideo = 'https://www.kabum.com.br/produto/384627/placa-de-video-rtx-3060-ventus-2x-msi-nvidia-geforce-12gb-gddr6-dlss-ray-tracing-rtx-3060-ventus-2x-12g-oc?msclkid=567961d3dfa81ec5db5405ac18aa8fa1&utm_source=bing&utm_medium=cpc&utm_campaign=Shopping_Performance_Site-Geral_1P&utm_term=4576442296701921&utm_content=Peformance_Site-Geral_1P'
		  placaMae = 'B450M';
		  linkPlacaMae = 'https://www.kabum.com.br/produto/99761/placa-mae-gigabyte-b450m-gaming-amd-am4-matx-ddr4-rev-1-0-?gclid=CjwKCAjwsvujBhAXEiwA_UXnAFcNeyu3jOfzXdmhG3g3o1epT5MDR2ndEBSWkH4cFYArD_TWFYMeaxoC8G0QAvD_BwE'
		  memoriaRam = 'Asgard 2x16gb 3200mhz';
	  	  linkMemoriaRam = 'https://www.mercadolivre.com.br/memoria-ram-asgard-loki-w2-rgb-32gb-2x163200mhz-ddr4/p/MLB22900664?from=gshop&matt_tool=76735400&matt_word=&matt_source=google&matt_campaign_id=14303413823&matt_ad_group_id=125956126719&matt_match_type=&matt_network=g&matt_device=c&matt_creative=543112166789&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB22900664-product&matt_product_partition_id=435661999394&matt_target_id=aud-1966981570049:pla-435661999394&gclid=CjwKCAjwsvujBhAXEiwA_UXnAGbZtqWPTU58-z4NopqKu2BSFCKJlzgjo-8c_LiV6CL3soLwOxiw4RoCVSYQAvD_BwE'
		  ssd = 'NVME 1TB KingSpec';
		  linkSSD = 'https://www.kabum.com.br/produto/380745/ssd-1-tb-kingston-nv2-m-2-2280-pcie-nvme-leitura-3500-mb-s-e-gravacao-2100-mb-s-snv2s-1000g?gclid=CjwKCAjwsvujBhAXEiwA_UXnAPFfPN1AZMG2JDhxj4GlQCSlho96hcWf1lAt0xXyePHArd2PQclqXhoCbykQAvD_BwE'
		  fonte = 'MSI 650W';
		  linkFonte = 'https://www.kabum.com.br/produto/369658/fonte-msi-mag-a650bn-atx-650w-80-plus-bronze-pfc-ativo-entrada-bivolt-preto-306-7zp2b22-ce0?gclid=CjwKCAjwsvujBhAXEiwA_UXnALBhFwrW2UEYNuXc6MLe93WitNG9g8M3cxKYPodrjEixrQZcpgJzZBoCKkQQAvD_BwE'
		  airCooler = 'Gammaxx 400 V2';
		  linkAirCooler= 'https://www.pichau.com.br/cooler-para-processador-deepcool-gammaxx-400-v2-led-azul-dp-mch4-gmx400v2-bl?gclid=CjwKCAjwsvujBhAXEiwA_UXnAOGAzu7wwra7wxiAfE3jzw3OqqdvnkNnVeRK-5uVy7uALKIKtfKfhBoCWv0QAvD_BwE'
		}

	
	
	  else if (valorTotal > 5999 && valorTotal <= 10000) {

	  processador = 'Ryzen 7 5700x';
	  linkProcessador = 'https://www.kabum.com.br/produto/320797/processador-amd-ryzen-7-5700x-3-4ghz-4-6ghz-max-turbo-cache-36mb-am4-sem-video-100-100000926wof?gclid=CjwKCAjwsvujBhAXEiwA_UXnAPFHfiWYl-y888eZTPrN0WhhVed_r9PUcc2_npq4-fYS8imyutZQ7BoCMYIQAvD_BwE'
	  placaVideo = 'RTX 3080';
	  linkPlacaVideo = 'https://www.kabum.com.br/produto/399025/placa-de-video-rtx-3080-xlr8-gaming-revel-epic-x-pny-nvidia-geforce-10-gb-gddr6x-rgb-lhr-dlss-ray-tracing-vcg308010ltfxppb1?gclid=CjwKCAjwsvujBhAXEiwA_UXnAA0oFMPnI-bJFmQZC9rdYvcBqgw0O_PV_H5AHl3j9SMLaeXJBKwjUxoC74MQAvD_BwE'
	  placaMae = 'B550M';
	  linkPlacaMae = 'https://www.magazineluiza.com.br/placa-mae-gigabyte-b550m-aorus-elite-matx-amd-am4-ddr4-pcie-4-0-x16-slot-dual-pcie-4-0-3-0/p/fgfc1eeaa3/in/pmae/?&seller_id=gigantec&utm_source=bing&utm_medium=pla&partner_id=69009&msclkid=5968e6815e30115fc2e282f861224394';
	  memoriaRam = 'Memória Corsair Vengeance PRO 2x32gb 3600mhz';
	  linkMemoriaRam = 'https://www.amazon.com.br/CORSAIR-Vengeance-PC4-28800-Desktop-Memory/dp/B082DJ19CK/ref=asc_df_B082DJ19CK/?tag=googleshopp00-20&linkCode=df0&hvadid=379787220407&hvpos=&hvnetw=g&hvrand=3441717812441970031&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101773&hvtargid=pla-880326806583&psc=1'
	  ssd = '2TB KingSpec';
	  linkSSD = 'https://www.mercadolivre.com.br/disco-solido-interno-kingspec-p3-1tb-1tb/p/MLB20657934?from=gshop&matt_tool=39437454&matt_word=&matt_source=google&matt_campaign_id=14303413652&matt_ad_group_id=125956125319&matt_match_type=&matt_network=g&matt_device=c&matt_creative=543112166618&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB20657934-product&matt_product_partition_id=1818033699058&matt_target_id=aud-1966981570049:pla-1818033699058&gclid=CjwKCAjwsvujBhAXEiwA_UXnAKiDespDoxrBEzQZrzYaQ3Jn4K4x7Jld5NL4AYM46TPXkmjpO6ZZVBoCnDgQAvD_BwE'
	  fonte = 'MSI 650W';
	  linkFonte = 'https://www.kabum.com.br/produto/103282/fonte-xpg-core-reactor-850w-80-plus-gold-modular?gclid=CjwKCAjwsvujBhAXEiwA_UXnALNzDXRkuyyMXu2D6r0IW483CyOHcb-aadDjehv1lzvsdg7gpP4WzBoCfQ8QAvD_BwE'
	  airCooler = ' Water Cooler DeepCool Gammax LE500'
	linkAirCooler = 'https://www.pichau.com.br/water-cooler-deepcool-gammaxx-le500-240mm-preto-r-le500-bklnmc-g-1?gclid=CjwKCAjwsvujBhAXEiwA_UXnAMvCF49PKA3c22R8WNqQ3FzdWlFDwW2yPT-zDN5AZf7Xd5oUzy2fKRoCwxMQAvD_BwE'
	}
  
	// Exibir as peças indicadas

	// Exibir as peças indicadas com os links correspondentes
indicacao += 'Processador: <a href="' + linkProcessador + '" target="_blank">' + processador + '</a><br>';
indicacao += 'Placa de Vídeo: <a href="' + linkPlacaVideo + '" target="_blank">' + placaVideo + '</a><br>';
indicacao += 'Placa Mãe: <a href="' + linkPlacaMae + '" target="_blank">' + placaMae + '</a><br>';
indicacao += 'Memória RAM: <a href="' + linkMemoriaRam + '" target="_blank">' + memoriaRam + '</a><br>';
indicacao += 'SSD: <a href="' + linkSSD + '" target="_blank">' + ssd + '</a><br>';
indicacao += 'Fonte: <a href="' + linkFonte + '" target="_blank">' + fonte + '</a><br>';
indicacao += 'Air Cooler: <a href="' + linkAirCooler + '" target="_blank">' + airCooler + '</a>';


  
	document.getElementById('indicacao').innerHTML = indicacao;
  })