import React from 'react'
import './DownloadButton.scss';

const DownloadButton = (props) => {

  let downloadLink = '';
  

  switch(props.variant){
	case 'apple':
		downloadLink = "https://apps.apple.com/ee/app/bolt-request-a-ride/id675033630";
		break;
	case 'google':
		downloadLink = "https://play.google.com/store/apps/details?id=ee.mtakso.client&hl=en&gl=US&pli=1";
		break;
	case 'app-gallery':
		downloadLink = "https://appgallery.huawei.com/app/C102041399?sharePrepath=ag&locale=en_GB&source=appshare&subsource=C102041399";
		break;
	default:
		downloadLink = "#";
  }

  return (
		<a href={downloadLink}>
			<img src={props.url} alt="download button" />
		</a>
	);
}

export default DownloadButton