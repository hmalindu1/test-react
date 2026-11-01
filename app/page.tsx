import Counter from "../components/counter";
import ModalButton from "../components/modal-button";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <ModalButton />
      <Counter />
    </div>
  );
};

export default Home;
