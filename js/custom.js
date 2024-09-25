// innerHTML을 활용한 동적 DOM생성
const frame = document.querySelector("section");
const data = ["title1", "title2", "title3"];

let tags = "";

data.forEach((el) => {
	tags += `
    <article>
      <h1>${el}</h1>
    </article>
  `;
});
// console.log(tags);
frame.innerHTML = tags;

// append로 동적 DOM 생성
// 기존 선택자 안쪽의 요소들을 유지하면서 뒤쪽에 새롭게 추가
// append의 인수값으로는 문자값이 아닌 실제 ElementNode 형태로 전달
const asideEl = document.createElement("aside");
asideEl.classList.add("modal");
asideEl.innerText = "Modal";

// 이것보단
// const btnEl = document.createElement("button");
// btnEl.innerText = "CLOSE";
// asideEl.append(btnEl);
// console.dir(asideEl);

asideEl.innerHTML = `
  <button>CLOSE</button>
`;

frame.append(asideEl);
