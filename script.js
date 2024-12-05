// Data for each programming language
const languages = {
  assembly: {
    info: "Created in 1949 to provide a more human-readable way to program computers.",
    code: `
      ; Simple Assembly code example
      section .data
          msg db 'Hello, World!', 0

      section .text
          global _start
      _start:
          mov rax, 1         ; Write syscall
          mov rdi, 1         ; File descriptor: stdout
          mov rsi, msg       ; Message address
          mov rdx, 13        ; Message length
          syscall
          mov rax, 60        ; Exit syscall
          xor rdi, rdi       ; Exit code 0
          syscall
    `,
    facts: [
      "Specific to each computer architecture.",
      "Considered a low-level language due to its closeness to hardware.",
      "Still used in specialized fields like embedded systems."
    ]
  },
  fortran: {
    info: "Developed in 1957 for numeric computation and scientific computing.",
    code: `
      PROGRAM SumArray
          IMPLICIT NONE
          INTEGER, DIMENSION(5) :: numbers
          INTEGER :: i, total

          numbers = (/ 1, 2, 3, 4, 5 /)
          total = 0

          DO i = 1, SIZE(numbers)
              total = total + numbers(i)
          END DO

          PRINT *, "The sum of the array is ", total
      END PROGRAM SumArray
    `,
    facts: [
      "Fortran stands for 'Formula Translation.'",
      "Used by NASA in its space missions.",
      "One of the oldest high-level programming languages still in use."
    ]
  },
  c: {
    info: "Developed in 1972 for system programming and creating operating systems.",
    code: `
      #include <stdio.h>

      int main() {
          printf("Hello, World!\\n");
          return 0;
      }
    `,
    facts: [
      "Influenced many modern languages like C++, Java, and Python.",
      "Unix operating system was originally written in C.",
      "Known for its portability across hardware platforms."
    ]
  },
  sql: {
    info: "Developed by IBM to manage and manipulate relational databases. Widely used in database management, data analysis, web development, and business intelligence. It has been popular since it provides a standardized way to query and manage data, essential for applications that rely on databases.",
    code: `
      -- Simple SQL Example: Retrieve all records from a table
      SELECT first_name, last_name
      FROM employees
      WHERE department = 'Sales'
      ORDER BY last_name;
    `,
    facts: [
      "SQL stands for 'Structured Query Language.'",
      "It can be pronounced as 'S-Q-L' or 'sequel,' stemming from its historical roots as SEQUEL (Structured English Query Language).",
      "SQL is the backbone of data management for about 80% of the world's data, according to a 2020 survey."
    ]
  },
  cplusplus: {
    info: "Developed as an extension of C to include object-oriented programming features. Widely used in game development, system/software development, real-time simulations, and performance-critical applications. It has been popular since it combines the efficiency of C with object-oriented features, allowing for complex and high-performance software development.",
    code: `
      #include <iostream>
            using namespace std;
            
            // Simple C++ example
            int main() {
                cout << "Hello, World!" << endl;
            
                // Example of object-oriented programming
                class Animal {
                public:
                    string name;
                    void speak() {
                        cout << name << " says Hello!" << endl;
                    }
                };
            
                Animal dog;
                dog.name = "Buddy";
                dog.speak();
            
                return 0;
            }
    `,
    facts: [
      "C++ was originally called 'C with Classes.'",
      "It's widely used in developing major game engines like Unreal Engine.",
      "Many performance-intensive applications, such as Adobe Photoshop, are developed in C++."
    ]
  },
  delphi: {
    info: "Developed by Borland in 1986 as an extension of Pascal to support object-oriented programming and rapid application development. Widely used in desktop application development, particularly for Windows platforms. Known for its fast compilation, strong typing, and the ability to create native applications efficiently.",
    code: `
      program HelloWorld;
      
      uses
          Forms, Dialogs;
      
      begin
          ShowMessage('Hello, World!');
      end.
    `,
    facts: [
      "Delphi was one of the first IDEs to support visual form design, allowing developers to design user interfaces by dragging and dropping components.",
      "It introduced the concept of 'components' and 'properties,' which influenced later development environments.",
      "Object Pascal is known for its highly readable syntax, making it beginner-friendly and great for educational purposes."
    ]
  },
  matlab: {
    info: "Designed for numerical computing and officially released in 1986. Provides an easy-to-use environment for matrix computations and is widely used in engineering, scientific research, data analysis, and academic teaching. Known for its vast library of built-in functions, toolboxes for various applications, and an interactive environment for algorithm development and data visualization.",
    code: `
      % Simple MATLAB example: Plot a sine wave
      x = 0:0.1:10; % Generate x values from 0 to 10 with 0.1 increments
      y = sin(x);   % Compute the sine of x
      
      plot(x, y);   % Plot the sine wave
      title('Sine Wave');
      xlabel('x');
      ylabel('sin(x)');
    `,
    facts: [
      "MATLAB stands for 'Matrix Laboratory.'",
      "It's widely used in academia for teaching linear algebra and numerical analysis.",
      "Everything in MATLAB is treated as a matrix—even scalars (1x1 matrices) and strings (arrays of characters)."
    ]
  },
  python: {
    info: "Developed by Guido van Rossum in 1991 to emphasize code readability and simplicity, making programming more accessible. Widely used in web development, data science, artificial intelligence, automation, and scientific computing. Its simple syntax, extensive standard library, and active community make it versatile and beginner-friendly.",
    code: `
      # Simple Python example: Print a greeting
      def greet(name):
          return f"Hello, {name}!"
      
      print(greet("World"))
    `,
    facts: [
      "Python is not named after a snake but the British comedy series 'Monty Python's Flying Circus.'",
      "It's one of the most popular languages for data science and machine learning.",
      "Typing 'import this' in a Python interpreter reveals the 'Zen of Python,' a humorous and philosophical set of principles for writing Pythonic code."
    ]
  },
  visualbasic: {
    info: "Developed by Microsoft in 1991 to provide a simple and efficient way to create Windows applications with a graphical user interface. Widely used in desktop application development, especially for business applications and internal tools. Its drag-and-drop interface design and straightforward syntax made it accessible for beginners and rapid application development.",
    code: `
      ' Simple Visual Basic example: Display a message box
      Public Class HelloWorld
          Public Shared Sub Main()
              MsgBox("Hello, World!")
          End Sub
      End Class
    `,
    facts: [
      "Visual Basic was one of the first programming environments to offer a graphical user interface for application development.",
      "It allowed developers to create complex applications with minimal code.",
      "Many legacy business applications are still running on Visual Basic."
    ]
  },
  ruby: {
    info: "Created by Yukihiro Matsumoto in 1995 to combine the best features of various programming languages and emphasize human-friendly syntax. Widely used in web development, particularly with the Ruby on Rails framework, and scripting. Its elegant syntax and the productivity boost provided by Ruby on Rails made it a favorite among web developers.",
    code: `
      # Simple Ruby example: Print a greeting
      def greet(name)
          puts "Hello, #{name}!"
      end
      
      greet("World")
    `,
    facts: [
      "Matz designed Ruby with the goal of making programming fun and productive, prioritizing developer happiness over machine efficiency.",
      "The Ruby on Rails framework revolutionized web development by promoting convention over configuration.",
      "Many startups, including GitHub, Airbnb, Shopify, and Basecamp, adopted Ruby on Rails for its speed in prototyping and development."
    ]
  },
  java: {
    info: "Developed by Sun Microsystems in 1995 to enable platform-independent software development, allowing applications to run on any device equipped with a Java Virtual Machine (JVM). Widely used in enterprise software, Android app development, web applications, and large-scale system development. Its 'write once, run anywhere' philosophy, robust security features, and extensive libraries have made it a staple in enterprise environments and mobile app development.",
    code: `
      import java.util.Random;
      
      public class RandomCode {
          public static void main(String[] args) {
              Random random = new Random();
              
              int randomNumber = random.nextInt(10);
              System.out.println("Random Integer: " + randomNumber);
              
              double randomDouble = random.nextDouble();
              System.out.println("Random Double: " + randomDouble);
              
              boolean randomBoolean = random.nextBoolean();
              System.out.println("Random Boolean: " + randomBoolean);
          }
      }
    `,
    facts: [
      "Java was originally called 'Oak' after an oak tree that stood outside the developer's office.",
      "The language was renamed 'Java' after the developers consumed a lot of coffee during its creation.",
      "The world-famous game Minecraft was originally written in Java."
    ]
  },
  php: {
    info: "Created by Rasmus Lerdorf in 1995 to manage his personal website. It evolved into a server-side scripting language for web development. Widely used in web development, content management systems (CMS) like WordPress, and server-side scripting. Known for its ease of integration with HTML, simplicity, and a large ecosystem of frameworks and tools.",
    code: `
      &lt;?php
      // Simple PHP example: Display a greeting
      $name = "World";
      echo "Hello, " . $name . "!";
      ?&gt;
    `,
    facts: [
      "PHP originally stood for 'Personal Home Page,' but now it stands for 'PHP: Hypertext Preprocessor.'",
      "Over 75% of websites use PHP in some capacity.",
      "Facebook was originally developed in PHP."
    ]
  },
  r: {
    info: "Developed by statisticians Ross Ihaka and Robert Gentleman in 1995 as a language for statistical computing and graphics. Widely used in data analysis, statistical modeling, academic research, and data visualization. Known for its extensive package ecosystem, strong data visualization capabilities, and active community.",
    code: `
      # Simple R example: Create a histogram
      data <- c(5, 12, 19, 24, 35, 45, 50) # Sample data
      hist(data, 
          main = "Histogram of Sample Data", 
          xlab = "Values", 
          ylab = "Frequency", 
          col = "blue", 
          border = "black")
    `,
    facts: [
      "R is named partly after the first names of its creators, Ross and Robert.",
      "R is heavily used in genomics and biostatistics for analyzing biological data.",
      "R integrates seamlessly with R Markdown for creating dynamic reports that combine code, analysis, and narrative."
    ]
  },
  javascript: {
    info: "Developed by Netscape in 1995 to add interactivity to web pages, enabling dynamic content in browsers. Widely used in web development (both front-end and back-end), mobile app development, and game development. Its versatility and ease of integration with HTML/CSS, combined with the rise of frameworks like React and Node.js, have solidified its role as a cornerstone of modern web development.",
    code: `
      // Simple JavaScript example: Display a message in the console
      function greet(name) {
          console.log(\`Hello, \${name}!\`);
      }
      
      greet("World");
    `,
    facts: [
      "JavaScript was developed in just 10 days by Brendan Eich.",
      "Despite its name, JavaScript is not directly related to Java nor based on Java.",
      "It is the only programming language that can run natively in all web browsers."
    ]
  },
  csharp: {
    info: "Developed by Microsoft in 2000 as part of its .NET initiative to provide a modern, object-oriented language for developing Windows applications. Widely used in Windows application development, game development with Unity, web services, and enterprise software. Known for its strong typing and versatility.",
    code: `
      using System;
      
      class Program {
          static void Main() {
              Console.WriteLine("Hello, World!");
          }
      }
    `,
    facts: [
      "C# is pronounced 'C-sharp,' inspired by the musical notation.",
      "C# was designed to combine the power of C++ with the simplicity and productivity of Java.",
      "C# is the primary language used in developing games with the Unity engine."
    ]
  },
  scratch: {
    info: "Developed by the MIT Media Lab in 2003 to introduce children and beginners to programming concepts through a visual, block-based interface. Widely used in educational settings, coding clubs, and as a tool for teaching fundamental programming principles. Known for its intuitive drag-and-drop interface that fosters creativity and logical thinking.",
    code: `
      // Scratch uses a block-based visual programming interface.
      // This example demonstrates the concept of events and loops
      // when a sprite is clicked or key is pressed.
    `,
    facts: [
      "Scratch is available in over 70 languages, making it accessible to a global audience.",
      "The Scratch online community hosts millions of user-created projects, encouraging collaboration and sharing.",
      "Scratch is named after the scratching technique used by hip-hop DJs, symbolizing the creative remixing of projects."
    ]
  },
  go: {
    info: "Developed by Google in 2009 to address issues of scalability and productivity in large software systems. Combines the performance of C with the simplicity of Python. Widely used in cloud services, microservices architectures, networking tools, and systems programming.",
    code: `
      package main
      
      import "fmt"
      
      func main() {
          fmt.Println("Hello, World!")
      }
    `,
    facts: [
      "The language's mascot is a gopher, affectionately known as the 'Go Gopher.'",
      "Go was specifically created to address the needs of the modern cloud era, making it a natural fit for distributed systems and microservices.",
      "Companies like Google, Uber, Netflix, and Slack use Go extensively in their backend systems."
    ]
  },
  swift: {
    info: "Developed by Apple in 2014 to replace Objective-C as the primary language for iOS and macOS development, aiming for improved safety, performance, and modern syntax. Widely used in iOS and macOS application development, server-side development, and systems programming.",
    code: `
      let 🐶 = "Dog"
      print(🐶) // Outputs: Dog
    `,
    facts: [
      "Swift is the primary language for building apps on iOS, macOS, watchOS, and tvOS.",
      "Swift was designed to be faster, safer, and easier to use than its predecessor, Objective-C, but they can interoperate seamlessly.",
      "Swift Playgrounds is an iPad app that teaches coding concepts using Swift in an interactive environment."
    ]
  },
  rust: {
    info: "Developed by Mozilla in 2010 (stable release in 2015) to create a safe, concurrent, and practical language for system-level programming. Widely used in systems programming, web assembly, embedded systems, and performance-critical applications. Known for its emphasis on safety without sacrificing performance.",
    code: `
      fn main() {
          let number = 7;
      
          // If-else
          if number % 2 == 0 {
              println!("Even");
          } else {
              println!("Odd");
          }
      
          // Match (similar to switch in other languages)
          let grade = 'A';
          match grade {
              'A' => println!("Excellent!"),
              'B' => println!("Good!"),
              _ => println!("Needs Improvement!"),
          }
      }
    `,
    facts: [
      "Rust has been voted the 'most loved programming language' in Stack Overflow's developer survey multiple times.",
      "The language's ownership model enforces memory safety without a garbage collector.",
      "Rust’s compiler is strict, but once you get through compilation, you can be confident in your program’s safety."
    ]
  },
  kotlin: {
    info: "Developed by JetBrains in 2011 (stable release in 2016) to improve upon Java by offering a more concise and expressive syntax. Fully interoperable with existing Java code. Widely used in Android app development, server-side development, and web development.",
    code: `
      fun String.isPalindrome(): Boolean = this == this.reversed()
      
      println("level".isPalindrome()) // Outputs: true
    `,
    facts: [
      "Kotlin is named after Kotlin Island near St. Petersburg, Russia.",
      "Kotlin eliminates the bane of Java developers—NullPointerException—with null safety features like nullable types and safe calls.",
      "Kotlin is the language behind popular Android apps like Tinder, Duolingo, and Slack."
    ]
  }
};

// Add event listeners to timeline items
document.querySelectorAll('.timeline-content').forEach(item => {
  item.addEventListener('click', () => {
    const lang = item.getAttribute('data-lang');
    const popup = document.getElementById('popup');
    const popupDetails = document.getElementById('popup-details');
    const timeline = document.querySelector('.timeline');

    // Populate modal content
    const { info, code, facts } = languages[lang] || {};
    popupDetails.innerHTML = `
      <h2>${lang.charAt(0).toUpperCase() + lang.slice(1)} Language</h2>
      <p><strong>Basic Info:</strong><br> ${info || 'No information available.'}</p>
      <pre><code>${code || 'No code example available.'}</code></pre>
      <p><strong>Fun Facts:</strong></p>
      <ul>
        ${facts ? facts.map(fact => `<li>${fact}</li>`).join('') : '<li>No fun facts available.</li>'}
      </ul>
    `;

    // Show the modal and hide the timeline
    popup.style.display = 'flex';
    timeline.classList.add('hide-line'); // Add class to hide line
  });
});

// Close button functionality
document.querySelector('.close-btn').addEventListener('click', () => {
  const popup = document.getElementById('popup');
  const timeline = document.querySelector('.timeline');

  popup.style.display = 'none'; // Hide the modal
  timeline.classList.remove('hide-line'); // Show the timeline again
});


