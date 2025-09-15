import { useState } from "react"

export default function Questions(){
    return(
        <section className="questions">
            <div className="questions__text-block">
                <h2 className="questions__title">Frequently Asked Questions</h2>
                <h3 className="questions__description">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</h3>
            </div>
            <ul className="faqlist"> 
                {
                    content.map((el, index) => {
                        return(
                            <li key={index} className="faqlist__faqItem-wrapper">
                                <FAQItem
                                    question={el.question}
                                    answer={el.answer}
                                />
                            </li>
                        )
                    })
                }
            </ul>
            <button className="questions__btn-moreInfo">More Info</button>
        </section>
    )
}

function FAQItem({question, answer}: {question:string, answer:string}){
    const [isOpen, setOpen] = useState<boolean>(false);
    return(
        <div className="faqItem">
            <button className="faqItem__question-wrapper" onClick={()=>setOpen(isOpen=>!isOpen)}>
                <h3 className="faqItem__question">{question}</h3>
                <div className={"faqItem__arrow " + (isOpen ? 'reverseArrow' : '')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                        <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/>
                    </svg>
                </div>
            </button>
            <p className={"faqItem__answer " + (isOpen ? 'openAnswer' : '')}>{answer}</p>
        </div>
    )
}

const content = [
    {
        question: 'What is Bookmark?',
        answer: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. '
    },
    {
        question: 'How can I request a new browser?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
    },
    {
        question: 'Is there a mobile app?',
        answer: 'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. '
    },
    {
        question: 'What about other Chromium browsers?',
        answer: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. '
    }
]