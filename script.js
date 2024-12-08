const input = document.querySelectorAll('.controls input');
function handleUpdate(){
const suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}` , this.value + suffix);


}
input.forEach(input => input.addEventListener('change', handleUpdate));
input.forEach(input => input.addEventListener('mousemove', handleUpdate));



// هذه السطر يقوم باختيار جميع عناصر input الموجودة داخل عنصر يحمل الكلاس .controls. وهو يعني أن الكود يتعامل مع مجموعة من المدخلات الموجودة داخل عنصر معين في الصفحة.

// function handleUpdate(): هذه دالة يتم تعريفها لتنفيذ شيء معين عندما يتفاعل المستخدم مع المدخلات.
// this: داخل الدالة، الكلمة المفتاحية this تشير إلى العنصر الذي تم التفاعل معه (أي المدخل input الذي تم تغييره).
// this.dataset.sizing: يتم البحث عن خاصية data-sizing الخاصة بالعنصر إذا كانت موجودة. إذا كانت موجودة، يتم تخزينها في المتغير suffix. إذا لم تكن موجودة، يتم تعيين قيمة فارغة ('') للمتغير.
// document.documentElement.style.setProperty(...): هذه السطر يغير قيمة خاصية CSS (في الجذر، وهو العنصر <html>) باستخدام setProperty. يتم تعيين قيمة متغير CSS (--${this.name}) مع القيمة المأخوذة من المدخل input الذي تم تغييره (this.value)، مع إضافة اللاحقة suffix (مثل "px" أو "%") إذا كانت موجودة.
/*هنا يتم إضافة نوعين من الأحداث لكل مدخل input:

change: عندما يغير المستخدم قيمة المدخل (على سبيل المثال، إذا غيّر القيمة ثم ترك المدخل).
mousemove: عندما يحرك المستخدم الماوس فوق المدخل (مثلاً، إذا كان المدخل من نوع range).
*/
