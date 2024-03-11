import { useParams } from 'react-router-dom'
import Section from '../components/Section'
import Heading from '../components/Heading'
import useAxios from '../hooks/useAxios'
import Subheading from '../components/Subheading'
import { Spinner } from 'flowbite-react'
import AnalysisCard from '../components/AnalysisCard'

const WebAnalyzeDetails = () => {
  const { id } = useParams()
  const { response, error, isLoading } = useAxios(`/web/${id}`)

  if (isLoading || !response) {
    return <Spinner />
  }

  const website = response?.website
  const analysis = response?.analysis?.response ? JSON.parse(response.analysis.response) : {}
  const file = response?.file

  return (
    <div>
      <Section>
        <Heading>Web Analysis Details</Heading>
        <Subheading>{website?.url}</Subheading>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias pariatur repellendus placeat, veritatis iste
          similique quo distinctio odio neque temporibus laboriosam quas veniam eaque nostrum officiis et. Delectus,
          doloremque enim!
        </p>
      </Section>
      <Section>
        <Subheading>Details</Subheading>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque non maiores praesentium, nostrum vel!
          Praesentium eius hic, mollitia nesciunt, dolor vitae ipsum tenetur dolores, natus ex corrupti sit repellendus.
        </p>

        {isLoading && <Spinner />}

        {error && <p>{error.message}</p>}

        {response && (
          <div className="xl:flex gap-4 justify-start items-start">
            <div className="xl:flex-1 xl:basis-1/2 xl:max-w-1/2 xl:grow-0 mb-4">
              <img
                className="rounded border"
                src={`http://127.0.0.1:8000/storage/${file?.location}`}
                alt={file?.name}
              />
            </div>
            <div className="w-full">
              <AnalysisCard data={analysis} />
            </div>
          </div>
        )}
      </Section>
    </div>
  )
}

export default WebAnalyzeDetails
