import React from 'react'

const DownloadButton = (props) => {
  return (
		<a href="https://apps.apple.com/ee/app/bolt-request-a-ride/id675033630">
			<img src={props.url} alt="download button" />
		</a>
	);
}

export default DownloadButton