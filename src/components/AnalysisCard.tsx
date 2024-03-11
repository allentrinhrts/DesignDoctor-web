import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, List } from 'flowbite-react'

const AnalysisCard = ({ data }) => {
  console.log({ data })
  const getIcon = (key) => {
    switch (key) {
      case 'failures':
        return '🔴'
      case 'successes':
        return '🟢'
      case 'suggestions':
        return '🟡'
    }
  }

  return (
    <Accordion>
      {Object.keys(data).map((key) => (
        <AccordionPanel key={key}>
          <AccordionTitle className="bg-white uppercase">{key}</AccordionTitle>
          <AccordionContent className="bg-white">
            {data[key].successes &&
              data[key].successes.length === 0 &&
              data[key].failures &&
              data[key].failures.length === 0 &&
              data[key].suggestions &&
              data[key].suggestions.length === 0 && <p>No data to show</p>}

            {Object.keys(data[key]).map(
              (subKey) =>
                data[key][subKey] &&
                data[key][subKey].length > 0 && (
                  <div key={subKey} className="mb-4">
                    <p className="text-lg font-bold uppercase mb-2 flex items-center gap-2">
                      <span>{getIcon(subKey)}</span> <span>{subKey}</span>
                    </p>
                    <List>
                      {data[key][subKey].map((item) => (
                        <List.Item key={item}>{item}</List.Item>
                      ))}
                    </List>
                  </div>
                )
            )}
          </AccordionContent>
        </AccordionPanel>
      ))}
    </Accordion>
  )
}

export default AnalysisCard
