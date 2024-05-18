import React from 'react'

const Tabs = () => {
    const tabData = [
        {
          id: 'term',
          title: 'Terms and Conditions',
          content: [
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
            'Another paragraph for the terms and conditions...'
            // Add more paragraphs as needed
          ]
        },
        {
          id: 'privacy',
          title: 'Privacy & Policy',
          content: [
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
            // Add more paragraphs as needed
          ]
        },
        {
          id: 'user',
          title: 'User policy',
          content: [
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
            // Add more paragraphs as needed
          ]
        }
        // Add more tabs as needed
      ];
  return (
    <section className="policy">
    <div className="policy-0">
        <div className="container">
            <div className="row pol">
                <div className="policy-0-0">
                <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                {tabData.map((tab, index) => (
                  <li className="nav-item" role="presentation" key={tab.id}>
                    <button className={`nav-link ${index === 0 ? 'active' : ''}`} id={`pills-${tab.id}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${tab.id}`} type="button" role="tab" aria-controls={`pills-${tab.id}`} aria-selected={index === 0}>
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
                      <div className="tab-content" id="pills-tabContent">
                        {tabData.map((tab, index) => (
                                <div className={`tab-pane fade show ${index === 0 ? 'active' : ''}`} id={`pills-${tab.id}`} role="tabpanel" aria-labelledby={`pills-${tab.id}-tab`} tabIndex="0" key={tab.id}>
                                    <div className="row">
                                    {tab.content.map((paragraph, index) => (
                                        <div className="col-12" key={index}>
                                        <div className="privacy-0-1">
                                            <div className="privacy-0-1-0">
                                            <button>{index + 1}</button>
                                            </div>
                                            <div className="privacy-0-1-1">
                                            <p>{paragraph}</p>
                                            </div>
                                        </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                                ))}
                        
                      </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Tabs