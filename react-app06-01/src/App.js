import './App.css';
function Header(props){
  return (
    <header>
        <h1><a href="/" onClick={event=>{
          event.preventDefault();
          props.onChangeMode();  // props값 입력 시 함수 동작
          }}>{props.title}</a></h1>
    </header>
  )
}
function Nav(props){
  const lis = [
  ]
  for(let i =0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id ={t.id} // id안에 t.id값 대입
    href={'/read/'+t.id}
    onClick ={event=>{
      event.preventDefault();
      props.onChangeMode(event.target.id);
       // 이벤트 발생 시 이밴트 대상의 id를 출력(id에 대입된 t.id가 출력)
    }}
    >{t.title}</a></li>);
  }
  return (
      <nav>
        <ol>
          {lis}
        </ol>
      </nav>
  )
}
function Article(props){
  return(
    
      <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
      
  )
}

function App() {
  const mode = 'WELCOME'
  const topics = [ 
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'js is ...'}
  ]
  let content = null;
  if(mode==='WELCOME'){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  }else if(mode==='READ'){
    content = <Article title="Welcome" body="Hello, Read"></Article>
    // <Article>이 밑에 존재 한다면 고정된 것이므로 오류 발생
    // <Article>을 {content}로 대체하여 고정이 아닌 유동으로 변경하면 오류 제거
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        alert('Header'); // 이 내용들이 props로 넘어감
        }}></Header>
      <Nav topics={topics} onChangeMode={id=>{
        alert(id);
      }} />

      {content}
    </div>
  );
}

export default App;
