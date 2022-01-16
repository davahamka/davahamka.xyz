import { AdditionalResult, BaseFrontmatter } from '~/types/frontmatter';
import ItemProject from './item-project';

type ListProjectProps = {
  sortedProject: ({
    stack: string;
    thumbnail: string;
  } & BaseFrontmatter &
    AdditionalResult)[];
};

const ListProject = ({ sortedProject }: ListProjectProps) => {
  return (
    <div className='mt-4 grid sm:grid-cols-2 gap-6' data-fade='3'>
      {sortedProject.map((item) => (
        <ItemProject key={item.title} data={item} />
      ))}
    </div>
  );
};

export default ListProject;
