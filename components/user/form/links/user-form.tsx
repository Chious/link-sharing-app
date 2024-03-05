import { Button, Form } from 'antd';
import { UserLinkSectionGrid } from './user-link-section-grid';
import { useUser } from '@/context/user-context';
import { Dispatch, SetStateAction } from 'react';
import { Link } from '@/context/user-context';

type FormType = {
  [key: string]: string;
};

function transformToObjectArray(
  form: FormType
): { platform: string; link: string }[] {
  const result: { platform: string; link: string }[] = [];

  for (let i = 0; i < 5; i++) {
    const platformKey = `platform${i}`;
    const linkKey = `link${i}`;

    if (form[platformKey] && form[linkKey]) {
      result.push({
        platform: form[platformKey]!,
        link: form[linkKey]!,
      });
    }
  }

  return result;
}

const onFinish = (
  values: FormType,
  setLinks: Dispatch<SetStateAction<Link[]>>
) => {
  const transferedValue = transformToObjectArray(values);

  //send link to DB
  setLinks(transferedValue);
};

export default function UserForm() {
  const { setLinks, links } = useUser();

  const handleAdd = () => {
    if (links.length < 5) {
      setLinks([...links, { platform: '', link: '' }]);
    }
  };

  return (
    <section className='flex h-full grow flex-col items-end bg-white p-6 pb-8 pt-9'>
      <div className='form-main flex h-full w-full flex-col gap-2'>
        <h1>Customize your links</h1>
        <h3>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </h3>
        <Button
          className='h-10 w-full border border-solid border-purple-dark bg-purple-light text-purple-dark'
          onClick={handleAdd}
        >
          Add new link
        </Button>
        <Form
          className='flex h-full flex-col gap-3'
          onFinish={(value: FormType) => {
            onFinish(value, setLinks);
          }}
        >
          <UserLinkSectionGrid links={links} setLinks={setLinks} />
          <div className='divider m-3 w-full border border-solid border-white-light' />
          <Button className='w-20' htmlType='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}
