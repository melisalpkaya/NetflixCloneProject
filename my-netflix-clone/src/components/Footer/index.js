import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
             <div class="footer">


<div class="footercon">
  <div class="flex1">
  <div class="icon-container">
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faLinkedin} />
    </div>
</div>
  
<ul class="list1">

<li><a href="">Sesli Betimleme</a></li>
<li><a href="">Yatırımcı İlişkileri</a></li>
<li><a href="">Yasal Hükümler</a></li>


</ul>
<ul class="list1">
<li><a href="">Yardım Merkezi</a></li>
    <li><a href="">İş İmkanları</a></li>
    <li><a href="">Çerez Tercihleri</a></li>
    
    </ul>
    <ul class="list1">
        <li><a href="">Hediye Kartları</a></li>
        <li><a href="">Kullanım Koşulları</a></li>
        <li><a href="">Kurumsal Bilgiler</a></li>

        </ul>
        <ul class="list1">
            <li><a href="">Medya Merkezi</a></li>
            <li><a href="">Gizlilik</a></li>
            <li><a href="">Bize Ulaşın</a></li>
 </ul>
         
</div>
</div>

        </footer>
    )
}

export default Footer