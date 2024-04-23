import React, { useState } from "react";
const Demo1403 = () =>{
    const [ketqua1, setketqua1] = useState(0);
    const [ketqua2, setketqua2] = useState('');
    const [nhapso, setnhapso] = useState(0);


    function handleClick() {
        //alert("Gia tri hien tai la: "  + ketqua1)

        // let sum:number = 0;
        // for(let i = 0; i<=nhapso;i++){
            // sum +=i
        // }
        // setketqua1(sum);
    

        // let pow:number = Math.pow(nhapso,nhapso);
        // let binary:string = nhapso.toString(2);
        // setketqua1(pow);    
        // setketqua2(binary);
        setketqua2(getBinary());
    }
    function getBinary() {
        let binary:string = '';
        let thuong:number = nhapso;
        let myArr:number[] = [];
        while (thuong != 0) {
            myArr.push(thuong%2);
            thuong = Math.floor(thuong/2);
        }
        for (let i = myArr.length - 1; i > - 1; i--) {
            binary += myArr[i];
        }
        return binary;
    }


    return (
<div style={{marginLeft:'20px'}}>
        <h1>bai tap ngay 14/3 </h1>
        Nhap vao mot so tu nhien n: <input type="number" value={nhapso} onChange={(e)=> {
            setnhapso(Number(e.target.value))
        }}/>
        
        &nbsp;&nbsp; <button onClick={handleClick}>Xu ly</button> <br />
        ket qua:
        <p>a){ketqua1}</p>
        <p>b){ketqua2}</p>

</div>
    )
}

export default Demo1403;