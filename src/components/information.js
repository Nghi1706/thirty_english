import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/information.css';
import info1 from '../img/info1.png'
import info2 from '../img/info2.png'
import info3 from '../img/info3.png'
import info4 from '../img/info4.png'

export default function information() {
    return (
        <div className='container-fluid containInfo'>
            <div className='row rowInfo'>
                <div className=' row rowImg'>


                </div>
                <div className='row'>
                    <div className='col-xl-1'>
                        <img
                            alt=""
                            src={info4}
                        />
                        <h6>ESL Hip Hop</h6>
                    </div>
                    <div className='col-xl-11 content'>
                        <p>With hip-hop music and style as its core themes, the ESl Hip Hop blog makes learning fun. This is an ESL blog that is powerfully entertaining and educational. You’ll be glad to know you don’t need to be a rapper to be able to learn from it.
                            Hip-hop artists are known for their command of language and lyrical freedom. This is well captured in these instructive posts. For example, there is a post on understanding the zero conditional by examining one of M.I.A’s songs.
                            The past perfect is explored through the songs of A Tribe Called Quest. Many posts feature vocabulary lists, videos and picture dictionaries.
                        </p>
                    </div>

                </div>
            </div>
            <div className='row rowInfo'>

                <div className=' row rowImg'>
                    <div className='col-xl-2'>
                        <img
                            alt=""
                            src={info1}
                        />
                    </div>


                </div>
                <div className='row content content2'>
                    <p>Understanding the English language with all its richness is made easier with Espresso English. These lessons are a valuable addition to your repertoire of learning tools. They are clearly presented, cover a broad range of topics and make good use of pictures.
                        The text is clear and concise with highlighted keywords. Espresso English is run by Brazil-based English teacher Shayna. It is suitable for beginners and intermediates.
                    </p>

                </div>
            </div>
            <div className='row rowInfo'>
                <div className=' row rowImg'>
                    <div className='col-xl-2'>
                        <img
                            alt=""
                            src={info2}
                        />
                    </div>
                </div>
                <div className='row content content2'>
                    <p>There is something for everyone at this comprehensive website. It is suitable for beginners, intermediates and advanced English language speakers.
                        RealLife English puts the student firmly in the driving seat of their learning with videos, podcasts and blogs. The blog section is vast and constantly updated with lessons and cultural insights. The sentences are short and to the point.
                        Each post is divided into a number of bite-sized chunks. This is a smart stylistic form that prevents the student from feeling overwhelmed. The blogs are divided into various categories such as fluency tips, grammar, cultural reflections, slang, swear words and lifestyle English.
                    </p>

                </div>
            </div>
            <div className='row rowInfo'>
                <div className=' row rowImg'>
                    <div className='col-xl-2'>
                        <img
                            alt=""
                            src={info3}
                        />
                    </div>
                </div>
                <div className='row content content2' >
                    <p>This is an impressive English learning blog with plenty of opportunities for the learner to hone their English language skills. The posts are a combination of text and video and they cover an eclectic mix of subjects.
                        For example, there are articles on pronunciation tips, cockney rhyming slang and learning English with song lyrics. There’s even a neat interactive element to some blogs!
                        The student watches a video and then fills in the missing words of the subsequent transcript. That’ll keep you on your toes!
                    </p>

                </div>
            </div>

        </div>
    )
}
