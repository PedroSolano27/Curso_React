import HierarchyComponent from "./HierarchyComponent";

// Expressões de Template
function ExpressionComponent() {
    const name = "Pedro";
    return (
      <section>
        <h3>a Soma é {3 + 2}</h3>
        <h4>Bem vindo {name}</h4>
        <HierarchyComponent/>
      </section>
    );
}

export default ExpressionComponent;