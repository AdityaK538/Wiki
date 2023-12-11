let button = document.querySelector('#button');
        let output = document.querySelector('#output');
        let input = document.querySelector('#input');
        
        button.addEventListener('click',getinput)

        function getinput(){
            let inputValue = input.value
            add1(inputValue)
        }
        function add1(add1){
            let h1 = document.createElement('h1')
            //put the parent tag here
            output.appendChild(h1);
            h1.innerHTML = add1

            //arrow function
            h1.addEventListener('click',()=>{
                h1.style.textDecoration = 'line-through';
                remove(add1)
            })
        }

// ################################################################################################

        function time(){
            let clock = new Date()
            let hr = clock.getHours()
            let mn = clock.getMinutes()
            let sc = clock.getSeconds()
            let hours = document.querySelector('#hours')
            // if(hr > 12)
            //     hr = hr-12
            hours.innerHTML = hr
            let min = document.querySelector('#minute')
            min.innerHTML = mn
            let sec = document.querySelector('#second')
            sec.innerHTML = sc
            }
            setInterval(time,1000)