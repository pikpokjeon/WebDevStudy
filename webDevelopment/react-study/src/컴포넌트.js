//shoppingList는 리낵트 컴포넌트클래스/타입이라 함
//각각 컴포넌트는 props라는 매개변수를 받아옴
//컴포넌트는 캡슐화되어 독립적으로 동작가능.
class ShoppingList extends React.Component {
  render() {
    return ( //컴포넌트 render함수는 표시할 뷰 구조 반환
      <div className="shopping-list">

        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>Instagram</li>
          <li>Instagram</li>
        </ul>
      </div> 
    );
  }
}
//무언가를 '기억'하기위해 state를 사용