import { todos } from "../data/todos";
function Todos({ data }) {
  return (
    <div>
      {data.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
    </div>
  );
}

export default Todos;
export async function getStaticProps() {
  //be jaye fetch kardane data mostagim be backend code ha dastresi darim.
  return {
    props: {
      data: todos,
    },
  };
}
