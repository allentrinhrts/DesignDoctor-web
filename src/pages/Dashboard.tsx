import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Section from '../components/Section'
import FileDropUpload from '../components/FileDropUpload'
import { Button, Label, TextInput } from 'flowbite-react'
import { HiCloudUpload } from 'react-icons/hi'
import useAxiosLazy from '../hooks/useAxiosLazy'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import validUrl from 'valid-url'

const headers = {
  'Content-Type': 'multipart/form-data',
}

const Dashboard = () => {
  const [formData, setFormData] = useState<FormData | null>(null)
  const [url, setUrl] = useState('')

  const [getData, { response, error, isLoading }] = useAxiosLazy('/files', 'post', formData, headers)
  const [getWebData, { response: webResponse, error: webError, isLoading: webIsLoading }] = useAxiosLazy(
    '/web',
    'post',
    { url }
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (!formData) {
      return
    }

    getData()
  }, [formData])

  useEffect(() => {
    if (response) {
      navigate(`/analyze/images/${response.data.file.id}`)
    }
  }, [response, error, isLoading])

  useEffect(() => {
    if (webResponse) {
      navigate(`/analyze/web/${webResponse?.data.website.id}`)
    }
  }, [webResponse])

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!validUrl.isUri(url)) {
      alert('Invalid URL')
      return
    }

    getWebData()
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]

    const data = new FormData()
    data.append('file', file)
    data.append('fileName', file.name)

    setFormData(data)
  }

  const handleDropUpload = (files) => {
    console.log({ files })

    const data = new FormData()
    data.append('file', files[0])
    data.append('fileName', files[0].name)

    setFormData(data)
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  return (
    <div>
      <Section>
        <Heading>Dashboard</Heading>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias pariatur repellendus placeat, veritatis iste
          similique quo distinctio odio neque temporibus laboriosam quas veniam eaque nostrum officiis et. Delectus,
          doloremque enim!
        </p>
      </Section>

      <Section>
        <Subheading>Upload a screenshot</Subheading>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas fugiat nihil porro quibusdam! Error
          obcaecati, dicta deserunt aut impedit natus! Inventore, praesentium numquam beatae asperiores delectus magnam
          repellendus deserunt harum?
        </p>
        <FileDropUpload isLoading={isLoading} onChange={handleUpload} onDrop={handleDropUpload} />
      </Section>

      <Section>
        <Subheading>Analyze a website</Subheading>
        <form onSubmit={handleSubmit}>
          <div className="max-w-md mb-2">
            <div className="mb-2 block">
              <Label htmlFor="url" value="Your email" />
            </div>
            <TextInput
              id="url"
              type="text"
              icon={HiCloudUpload}
              placeholder="https://allentrinh.com"
              required
              onChange={handleUrlChange}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Section>
    </div>
  )
}

export default Dashboard
