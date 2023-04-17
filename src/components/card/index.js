import { useState } from 'react';
import * as htmlToImage from 'html-to-image';
import FileSaver from 'file-saver';
import { Container } from './style';

export default function Card() {
  const [url, setUrl] = useState();

  const downloadQrcode = () => {
    const qrcode = document.getElementById('qrcode');
    htmlToImage.toBlob(qrcode)
      .then((blob) => {
        if (window.saveAs) {
          window.saveAs(blob, 'my-qrcode.png');
        } else {
          FileSaver.saveAs(blob, 'my-qrcode.png');
        }
      });
  };

  return (
    <Container>
      <p>Digite a URL do site abaixo</p>
      <input
        name="url"
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        placeholder="https://www.example.com"
      />
      {
        url
          ? (
            <>
              <img id="qrcode" src={`http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=300x400`} alt="google" />
              <button
                type="button"
                onClick={downloadQrcode}
              >
                DOWNLOAD
              </button>
            </>
          )
          : <div />
      }

    </Container>
  );
}
