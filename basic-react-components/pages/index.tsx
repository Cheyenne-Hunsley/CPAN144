import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Counter from '../components/counter'
import ShowButton from '../components/show'
import Submission from '../components/submit'
import List from '../components/list'
import Hover from '../components/hover'

export default function Home() {
  return (
    <main>
      <Header/>
      <br></br>
      <MainContent
        title="CPAN144 - Lab 4 Submission"
        content="My Name is Cheyenne Hunsley (N01747035)"
      />
      <br></br>
      <Counter/>
      <br></br>
      <h3><b>Task 2:</b></h3>
      <ShowButton/>
      <br></br>
      <h3><b>Task 3:</b></h3>
      <Submission/>
      <br></br>
      <h3><b>Task 4:</b></h3>
      <List/>
      <br></br>
      <h3><b>Task 5:</b></h3>
      <Hover/>
    </main>
  );
}