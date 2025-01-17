import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const BirthdayContainer = () => {
  const textBoxRef = useRef<HTMLParagraphElement>(null);
  const hbdRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Register GSAP plugins if needed
    gsap.config({
      nullTargetWarn: false,
    });

    if (textBoxRef.current && hbdRef.current) {
      // Split text for animation
      textBoxRef.current.innerHTML = `<span>${textBoxRef.current.innerHTML
        .split('')
        .join('</span><span>')}</span>`;

      hbdRef.current.innerHTML = `<span>${hbdRef.current.innerHTML
        .split('')
        .join('</span><span>')}</span>`;

      const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: '15deg',
      };

      const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: '-15deg',
      };

      // Create timeline
      const tl = gsap.timeline();

      tl.to('.container', 0.6, {
        visibility: 'visible',
      })
        .from('.one', 0.7, {
          opacity: 0,
          y: 10,
        })
        .from('.two', 0.4, {
          opacity: 0,
          y: 10,
        })
        .to(
          '.one',
          0.7,
          {
            opacity: 0,
            y: 10,
          },
          '+=3.5',
        )
        .to(
          '.two',
          0.7,
          {
            opacity: 0,
            y: 10,
          },
          '-=1',
        )
        .from('.three', 0.7, {
          opacity: 0,
          y: 10,
        })
        .to(
          '.three',
          0.7,
          {
            opacity: 0,
            y: 10,
          },
          '+=3',
        )
        .from('.four', 0.7, {
          scale: 0.2,
          opacity: 0,
        })
        .from('.fake-btn', 0.3, {
          scale: 0.2,
          opacity: 0,
        })
        .staggerTo(
          '.hbd-chatbox span',
          1.5,
          {
            visibility: 'visible',
          },
          0.05,
        )
        .to(
          '.fake-btn',
          0.1,
          {
            backgroundColor: 'rgb(127, 206, 248)',
          },
          '+=4',
        )
        .to(
          '.four',
          0.5,
          {
            scale: 0.2,
            opacity: 0,
            y: -150,
          },
          '+=1',
        )
        .from('.idea-1', 0.7, ideaTextTrans)
        .to('.idea-1', 0.7, ideaTextTransLeave, '+=2.5')
        .from('.idea-2', 0.7, ideaTextTrans)
        .to('.idea-2', 0.7, ideaTextTransLeave, '+=2.5')
        .from('.idea-3', 0.7, ideaTextTrans)
        .to('.idea-3 strong', 0.5, {
          scale: 1.2,
          x: 10,
          backgroundColor: 'rgb(21, 161, 237)',
          color: '#fff',
        })
        .to('.idea-3', 0.7, ideaTextTransLeave, '+=2.5')
        .from('.idea-4', 0.7, ideaTextTrans)
        .to('.idea-4', 0.7, ideaTextTransLeave, '+=2.5')
        .from(
          '.idea-5',
          0.7,
          {
            rotationX: 15,
            rotationZ: -10,
            skewY: '-5deg',
            y: 50,
            z: 10,
            opacity: 0,
          },
          '+=1.5',
        )
        .to(
          '.idea-5 span',
          0.7,
          {
            rotation: 90,
            x: 8,
          },
          '+=1.4',
        )
        .to(
          '.idea-5',
          0.7,
          {
            scale: 0.2,
            opacity: 0,
          },
          '+=2',
        )
        .staggerFrom(
          '.idea-6 span',
          0.8,
          {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: 'expo.out',
          },
          0.2,
        )
        .to('.idea-6 span', {
          duration: 0.8,
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: 'expo.out',
          stagger: 0.2, // Apply stagger here
          delay: 1.5, // Replace '+=1.5' with delay
        })
        .staggerFromTo(
          '.baloons img',
          2.5,
          {
            opacity: 0.9,
            y: 1400,
          },
          {
            opacity: 1,
            y: -1000,
          },
          0.2,
        )
        .from(
          '.profile-picture',
          0.5,
          {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
          },
          '-=2',
        )
        .from('.hat', 0.5, {
          x: -100,
          y: 350,
          rotation: -180,
          opacity: 0,
        })
        .staggerFrom(
          '.wish-hbd span',
          0.7,
          {
            opacity: 0,
            y: -50,
            rotation: 150,
            skewX: '30deg',
            ease: 'elastic.out(1, 0.5)',
          },
          0.1,
        )
        .fromTo(
          '.wish-hbd span',
          {
            scale: 1.4,
            rotationY: 150,
          },
          {
            duration: 0.7,
            scale: 1,
            rotationY: 0,
            color: '#ff69b4',
            ease: 'expo.out',
            stagger: 0.1, // Apply stagger here
            delay: 2.0, // Replace 'party' with appropriate delay
          },
        )
        .from(
          '.wish h5',
          0.5,
          {
            opacity: 0,
            y: 10,
            skewX: '-15deg',
          },
          'party',
        )
        .staggerTo(
          '.eight svg',
          1.5,
          {
            visibility: 'visible',
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
          },
          0.3,
        )
        .to('.six', 0.5, {
          opacity: 0,
          y: 30,
          zIndex: '-1',
        })
        .staggerFrom('.nine p', 1, ideaTextTrans, 1.2)
        .to('.last-smile', 0.5, {
          rotation: 90,
        });

      // Replay button
      document.getElementById('replay')?.addEventListener('click', () => {
        tl.restart();
      });
    }
  }, []);

  return (
    <>
      <div className='one'>
        <h1 className='one special-text'>
          Hi
          <span id='name'>Everyone</span>
        </h1>
        <p className='two special-text'>✨ It's my birthday! ✨</p>
      </div>

      <div className='three'>
        <p className='special-text'>
          🎉 Wishing myself the happiest of birthdays! 🎉
        </p>
      </div>

      <div className='four'>
        <div className='text-box'>
          <p className='hbd-chatbox' ref={textBoxRef}>
            Happy birthday to me! 🎂 Here's to another year of growth, love, and
            joy. May this year ahead be filled with endless opportunities and
            happiness! ✨
          </p>
          <p className='fake-btn'>Send 💝</p>
        </div>
      </div>

      <div className='five'>
        <p className='idea-1'>Let's celebrate this special day... ✨</p>
        <p className='idea-2'>Reflect on how far I've come. 🤔</p>
        <p className='idea-3'>
          I realized, this is a time
          <br />
          <strong className='special-text'>to cherish myself</strong>
        </p>
        <p className='idea-4'>Because...</p>
        <p className='idea-5 special-text'>
          I am worth it
          <span>✨</span>
        </p>
        <p className='idea-6'>
          <span>S</span>
          <span>E</span>
          <span>L</span>
          <span>F</span>
        </p>
      </div>

      <div className='six'>
        <img
          src='./img/profile.jpg'
          alt='profile'
          className='profile-picture'
        />
        <img src='./img/hat.svg' alt='hat' className='hat' />
        <div className='wish'>
          <h3 className='wish-hbd' ref={hbdRef}>
            Happy Birthday to Me!
          </h3>
          <h5>May I continue to achieve great things! ;)</h5>
        </div>
      </div>

      <div className='seven'>
        <div className='baloons'>
          {[...Array(30)].map((_, i) => (
            <img key={i} src={`img/ballon${(i % 3) + 1}.svg`} alt='' />
          ))}
        </div>
      </div>

      <div className='eight'>
        {[...Array(9)].map((_, i) => (
          <svg key={i} viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='20' cy='20' r='20' />
          </svg>
        ))}
      </div>

      <div className='nine'>
        <p>Okay, now come back and remind yourself how awesome you are.</p>
        <p id='replay'>Or click, if you want to watch it again.</p>
        <p className='last-smile'>:)</p>
      </div>
    </>
  );
};

export default BirthdayContainer;
