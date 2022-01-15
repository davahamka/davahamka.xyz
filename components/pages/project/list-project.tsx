import { AdditionalResult, BaseFrontmatter } from '~/types/frontmatter';
import ItemProject from './item-project';

type ListProjectProps = {
  sortedProject: ({
    stack: string;
  } & BaseFrontmatter &
    AdditionalResult)[];
};

const ListProject = ({ sortedProject }: ListProjectProps) => {
  return (
    <div className='mt-4 grid md:grid-cols-2 gap-6' data-fade='3'>
      {sortedProject.map((item) => (
        <ItemProject key={item.title} data={item} />
      ))}
    </div>
  );
};

export default ListProject;
