const num_contacts = 10
const firstNames=['شفاء','رامي','وائل','وداد','شيماء','رحمة','نور','هاجر','رهف','امنية','مرام','مي','رجاء','كوثر','سارة','مروه','مرزوق','ياسر','محمود','ماجد','حنفي','محمد','أحمد','زينب']
const lastNames=['عيد','وجدي','العربي','شاهين','الشناوي','الشربيني','الدمياطي','بتاع الوزير','الدمياطي','المنصوري','صقر','عبدالغني','الجداوي','السنباطي','السيوطي','الطلخاوي','الطيب','عرفات','ابو دقة','المصري','الأبهه','حكيم','راجي']
// RANDOM FINCTION
const rand=(max: number, min=0)=> Math.floor(Math.random()* (max - min + 1 )) + min
//generate a name
 const generateName=()=>firstNames[rand(firstNames.length - 1)] +" "+ lastNames[rand(lastNames.length -1)]

 // generate a number
 const generatePhone=()=> '01'+rand(6,1) +"-"+ rand(999,100) +"-" + rand(999,100)+"-" + rand(99,10)
 
 // create a person
const createPersone= () => ({name:generateName(), phone: generatePhone(),})
 
// add Key based on index
const addKeys = (val: object, key:number) => ({key:key, ...val})

// create an array of length NUM_CONTACTS and alphabetize by name
 export default Array.from({length:num_contacts},createPersone).map(addKeys)

// compare two contacts for alphabetizing
export const compareNames = (contact1:string, contact2:string) => {
    var x = contact1.name.toLowerCase();
    var y = contact2.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  }
