import React, { useEffect, useState } from 'react'

function PreviewAvatar() {

    const [avatar,setAvatar] = useState();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    },[avatar])

    const handlePreview = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        // Trường hợp bạn muốn chọn 1 ảnh nhưng upload lên 2 lần liên tiếp cùng 1 tấm ảnh
        e.target.value = null;
    }

    return (
        <div>
            <input type="file" onChange={handlePreview}/>
            {avatar && (<img src={avatar.preview}  width="80%" alt="Gái xinh"/>)}
        </div>
    )
}

export default PreviewAvatar
