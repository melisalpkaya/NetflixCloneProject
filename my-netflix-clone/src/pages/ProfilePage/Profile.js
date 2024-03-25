import React, { useState } from 'react';
import './profile.css';

function Profile() {
    // Kullanıcı bilgileri state'te saklanacak
    const [userInfo, setUserInfo] = useState({
        username: localStorage.getItem('username') || 'Default Kullanıcı',
        email: localStorage.getItem('email') || 'example@example.com',
        subscription: localStorage.getItem('subscription') || 'basic'
    });

    // Kullanıcı bilgilerini düzenleme modunda tutacak bir state
    const [editing, setEditing] = useState(false);

    // Kullanıcı bilgilerini güncellemek için bir fonksiyon
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Kullanıcı bilgilerini localStorage'da saklamak
    const saveUserInfo = () => {
        localStorage.setItem('username', userInfo.username);
        localStorage.setItem('email', userInfo.email);
        localStorage.setItem('subscription', userInfo.subscription);
        setEditing(false); // Düzenleme modunu kapat
        alert('Kullanıcı bilgileri güncellendi!');
    };

    return (
        <div className="profile-container">
        <div className="profile-left">
            <div className="user-img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User Avatar" />
            </div>
        </div>
        <div className="profile-right">
            <h1 className="profile-heading">Hesap</h1>
            <div className="profile-field">
                <label className="profile-label">Kullanıcı Adı:</label>
                {editing ? (
                    <input type="text" name="username" value={userInfo.username} onChange={handleInputChange} className="profile-input" />
                ) : (
                    <span>{userInfo.username}</span>
                )}
            </div>
            <div className="profile-field">
                <label className="profile-label">E-posta:</label>
                {editing ? (
                    <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} className="profile-input" />
                ) : (
                    <span>{userInfo.email}</span>
                )}
            </div>
            <div className="profile-field">
                <label className="profile-label">Abonelik:</label>
                {editing ? (
                    <select name="subscription" value={userInfo.subscription} onChange={handleInputChange} className="profile-input">
                        <option value="basic">Basic</option>
                        <option value="standard">Standard</option>
                        <option value="premium">Premium</option>
                    </select>
                ) : (
                    <span>{userInfo.subscription}</span>
                )}
            </div>
            <div className="profile-field">
                {editing ? (
                    <button onClick={saveUserInfo} className="profile-button">Bilgileri Kaydet</button>
                ) : (
                    <button onClick={() => setEditing(true)} className="profile-button">Düzenle</button>
                )}
            </div>
        </div>
    </div>
    
    );
}

export default Profile;
