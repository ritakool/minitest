function lesson1(){
    let a=1;
    let number= parseInt(prompt('Nhập số nguyên dương x: '));
    for (let i=1;i<= number; i++){
        a= a*i;
    }
    alert('giai thừa của x là: '+a);
}
function lesson2(){
    let count=0;
    for (let i =1; i<=100;i++) // cho i chạy từ 1 đến 100
    {
        if (i %3 === 0) // điều kiện để lấy số chia hết cho 3
        {
            document.write(i + '<br>') // ghi ra màn hình số chia hết cho 3
            count ++; // biến này để dếm số lần có số chia hết cho 3
            if (count === 15) // điều kiện đề bài cho
            {
                break; // thoát khỏi vòng lặp for
            }
        }
    }
}
function lesson3(){
    let arr=[];
    let sums = 0;
    let x = +prompt('nhap do dai mang:');
        arr.length= x;
    for (let i=0;i< arr.length;i++)
    {
        arr[i]= Math.floor(Math.random()*101);
    }
    document.write('ta có mảng là: ' +arr + '<br>')
    for (let i=0;i<arr.length;i++)
    {
        if (arr[i] %5 ===0){
            sums += arr[i];
        }
    } document.write('tổng các số chia hết cho 5 là: ' +sums)
}
function lesson4(){
    let ar=[];
    function length(){
        let x = +prompt('Độ dài mảng');
        ar.length=x;
        document.write('độ dài mảng là: ' +x +'<br>')
    } length();
    function phantu(){
        for (let i=0; i<ar.length;i++){
            ar[i]=Math.floor(Math.random()*101);
        } document.write('ta có mảng: ' +ar +'<br>')
    }
    phantu()
    function sochan(){
        let count =0;
        let sums = 0;
        let br = [];
       for (let i=0; i<ar.length;i++)
       {
           if (ar[i] %2 ===0)
           {
               br.push(ar[i]);
               sums += ar[i];
               count +=1;
           }
        }
       document.write('Mảng có: ' +count +' số chia hết cho 2' +'<br>');
       document.write('Các số là: ' +br + '<br>');
       document.write('Tổng của chúng là: ' +sums +'<br>');
       return ar
    }
    sochan();
    function SNT ()
    {
        let cou=0;
        let sum=0;
        let dem=0;
        let br2=[];
        for (let i=0; i< ar.length;i++)
        {
            for (let j=1;j<=ar[i];j++)
            {
                if (ar[i]%j === 0)
                {
                    cou +=1;
                }
            }
            if (cou === 2)
            {
            br2.push(ar[i]);
            sum += ar[i];
            dem +=1;
            }
            cou =0;
        }
        document.write('Trong mảng có '+ dem + ' số nguyên tố'+'<br>');
        document.write('Các số đó là: ' +br2 +'<br>');
        document.write('Tổng của chúng là: ' +sum);
    } SNT();
}
