import { Card, Spinner } from 'flowbite-react'
import useAxios from '../hooks/useAxios'
import Section from '../components/Section'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import { Link } from 'react-router-dom'
import { HiExclamationCircle } from 'react-icons/hi'
import moment from 'moment'

const AnalyzeList = () => {
  const { response, error, isLoading } = useAxios('/files')

  return (
    <Section>
      <Heading>Analyze Images</Heading>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi asperiores quidem veniam, nostrum labore
        fugiat quo quaerat earum perspiciatis sint aut fuga incidunt deleniti est. Consequuntur eligendi repellendus
        molestias.
      </p>

      {response && response.length === 0 ? (
        <Section>
          <div className="p-4 bg-sky-600 rounded text-white">
            <Subheading>
              <span className="text-white flex items-center">
                <HiExclamationCircle className="inline text-4xl mr-2" />
                No files found
              </span>
            </Subheading>
            <p>
              Uploaded files and websites will appear here.{' '}
              <Link to="/" className="text-white underline">
                Try it now
              </Link>
              !
            </p>
          </div>
        </Section>
      ) : (
        <ul className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {response &&
            response.map((file: string) => (
              <li key={file.id}>
                <Card
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  renderImage={() => (
                    <div className="w-full h-40 bg-gray-300 rounded-t object-cover overflow-hidden">
                      <img src={`http://127.0.0.1:8000/storage/${file.location}`} />
                    </div>
                  )}
                  href={`/analyze/images/${file.id}`}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{file.name}</h5>
                  <p className="text-gray-500 text-sm">{moment(file.created_at).format('MMMM Do YYYY')}</p>
                </Card>
              </li>
            ))}
        </ul>
      )}
    </Section>
  )
}

export default AnalyzeList
