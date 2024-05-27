import React from "react";

function TopicsPage() {
  return (
    <>
      <h2 id="#top">Web Dev Concepts</h2>
      <nav class="local">
        <a href="#servers">Servers</a>
        <a href="#frontendDesign">Design</a>
        <a href="#images">Images</a>
        <a href="#favicons">Favicons</a>
        <a href="#css">CSS</a>
        <a href="#javaScript">JavaScript</a>
      </nav>
      <article id="servers">
        <h3>Web Servers</h3>
        <p>
          The <strong>index</strong> page is the default URL for a web
          application. If an HTTP client requests a URL that points to the
          directory folder rather than a specific page, the web server will
          automatically load the index.html file. For this reason, the index is
          generally considered the designated home page of a web app.
        </p>
        <p>
          Using the <strong>Inspector Network</strong> tab for the index.html
          page on the web server, it's possible to examine every file located
          within the a2-grossbed directory. The Network tab displays HTTP
          response headers for each file, including the request URL, the request
          method (GET), the status code, the remote address, the host, the
          server, cache details, content type, dates, and much more. In
          contrast, when viewing this same file while stored on the local
          computer, the response headers offer far less information. In this
          case, we can only see the request URL, the request method, the status
          code, and the content type. Other network details are not relevant in
          this case, as the local file is not being sent across the internet
          from a web server.
        </p>
        <p>
          The files main.css and main.js have a<strong>status code</strong> of
          404 — Not Found because they are directly referenced in the index.html
          link and script tags, however those files do not exist on the web
          server. On the hand, while the index.html page does not point to a
          specific favicon.ico file, it still shows a status code of 200 — OK.
          This is due to the fact that the web server makes an HTTP request to
          the web.engr.oregonstate.edu subdomain for the favicon.ico file, which
          is located on the ENGR server.
        </p>
        <p>
          Looking at the <strong>URL</strong> for this web file, the scheme is
          HTTPS (Hypertext Transfer Protocol Secure). There are two subdomains —
          web and engr — which preface the primary domain of oregonstate.edu.
          Finally, the URL shows a path to the resource as follows:
          /~grossbed/a2-grossbed/. This path is based on the directory structure
          created in the Oregon State ENGR web server.
        </p>
        <a class="top" href="#top">
          Top
        </a>
      </article>
      <article id="frontendDesign">
        <h3>Frontend Design</h3>
        <p>
          The concept of <strong>frontend design</strong> refers to the process
          of designing and creating an appropriate and enjoyable user interface
          and user experience for a web application. This includes the visual
          design and layout of a website, the graphical user-interface (GUI), as
          well as any interactive components, such as videos, forms, and
          buttons. Additionally, Frontend design involves developing a
          consistent scheme for a website's page layout, navigation, and visual
          design.
        </p>
        <h4>The Five "E"s of Usability</h4>
        <dl>
          <dd>
            <strong>Effective:</strong> allows users of a website to accomplish
            what they set out to achieve.
          </dd>
          <dd>
            <strong>Efficient:</strong> users are able to perform tasks quickly
            and with the least number of steps possible.
          </dd>
          <dd>
            <strong>Easy to navigate:</strong> the site features a
            well-thought-out layout and navigation system that allows even
            first-time users to immediately locate what they need.
          </dd>
          <dd>
            <strong>Error-free:</strong> users do not experience accessibility
            or availability issues while using the site.
          </dd>
          <dd>
            <strong>Enjoyable to use, or engaging:</strong> the site's design,
            style, and content are tailored to meet the needs and desires of its
            intended audience, allowing for a high level of user engagement.
          </dd>
        </dl>
        <p>
          <strong>Page layout tags</strong> are used to break up different
          sections of content within a site. The
          <code>&lt;header&gt;</code> element is used to identify the top-level
          banner on a website, which usually contains the site's name, logo, and
          main color scheme. The header will typically stay the same as a user
          navigates from page to page within a single site. The{" "}
          <code>&lt;nav&gt;</code> element defines a set of navigational links
          that will take users from the current page to another page, either
          externally or internally linked. Navigation bars generally include the
          site's main menu, search bar, site tools, business location, and legal
          links. The <code>&lt;main&gt;</code> element is a container for the
          site's primary content, such as text, media, galleries, or stories.
          The <code>&lt;section&gt;</code> element is used to contain groups of
          logically connected content, such as headlines, articles, and images.
          The
          <code>&lt;article&gt;</code> element is used within a section to
          indicate the start of a specific topic, much like how different
          articles can be contained within a single newspaper section. The
          <code>&lt;aside&gt;</code> element is used to display information
          relevant to an article. Similarly, <code>&lt;figure&gt;</code> and
          <code>&lt;figcaption&gt;</code> are used to display and caption
          article-related media items. The <code>&lt;footer&gt;</code> element
          is typically the final content of a webpage, placed below the main
          content, and it includes contact and legal information, copyright
          statements, and links to important or relevant pages. Finally,
          <code>&lt;div&gt;</code> elements are special placeholders designated
          for dynamic content.
        </p>
        <h4>Using anchors to link content and sites</h4>
        <ol>
          <li>
            Anchors link to <strong>external content</strong> by utilizing a
            <code>href</code> attribute that defines a URL outside the current
            site. This will create a link that the user can then click in order
            to access the resource at the specified URL.
          </li>
          <li>
            <strong>Internally linking content</strong> on the same site page
            can be achieved by providing an anchor with a<code>href</code>{" "}
            attribute that references a specific tag's ID attribute. By using
            another element's ID with a hashtag placed in front of it, anchor
            tags can easily navigate from item to item within a single page.
          </li>
          <li>
            Anchors can also be used to create
            <strong>links from page to page</strong> within a site by using a
            <code>href</code> attribute that resolves to a relative URL path.
            This URL path can either point to a file within the same directory
            as the current page, a parent directory, or a child directory.
          </li>
        </ol>
        <a class="top" href="#top">
          Top
        </a>
      </article>
      <article id="images">
        <h3>Optimizing Images</h3>
        <p>
          Images placed online must be optimized to meet six specifications.
          They should have a <strong>descriptive file name</strong>, including
          basic information and details about the image. This enables search
          engine bots to properly categorize an image for users. Images should
          have a <strong>small file size</strong> in order to achieve fast load
          times and reduce the storage space required on a server. Cropping and
          editing images to fit the
          <strong>exact dimensions</strong> required on a web page will also
          help to optimize page load times. All image files should have the
          <strong>correct file format</strong>. Photos are generally stored as
          .JPG files. Logos and icons are typically saved as .GIF or .PNG files.
          Any graphics that require true transparency must be 24-bit .PNG.
          Images with <strong>reduced resolution</strong> will offer a faster
          load time. Similarly, providing multiple image resolutions depending
          on the monitor size and resolution will help to optimize the user
          experience. Finally, images should adhere to general standards when it
          comes to their <strong>color mode</strong>: RGB for PNG, JPG, SVG, and
          WebP files, as well as indexed for GIF and select PNG files.
        </p>
        <p>
          When it comes to <strong>photographic images</strong>, JPG files and
          WebP files are the most appropriate options. JPG files allow users to
          capture millions of colors in excellent detail, which is necessary
          when using high resolution cameras. These files can then be resized
          and compressed to reduce load times and strain on web servers.
          Similarly, WebP files make it easy to compress photographs into
          smaller sizes, while retaining a rectangular shape and crisp colors.
          When working with <strong>line art</strong>, however, SVG, GIF, and
          PNG files are better suited to the task at hand. SVG files allow users
          to develop crisp, interactive or animated line art images, while GIF
          files are typically used to display animated line art graphics, and
          PNG files can create complex line art by mixing solid colors with true
          transparency.
        </p>
        <a class="top" href="#top">
          Top
        </a>
      </article>
      <article id="favicons">
        <h3>Favicons</h3>
        <p>
          Favicons are graphic symbols that allow users to quickly identify
          specific applications and tools. Developers create favicons by
          simplifying complex symbols or logos and then modifying that symbol to
          <strong>work across a large range of browsers and devices</strong>.
          The most common favicon file formats are ICO, PNG, and SVG. Each
          favicon will be saved in a wide array of sizes, allowing for proper
          rendering on a variety of browsers and devices. Specific browsers will
          then pick up the relevant favicon image, displaying it in the browser
          tab and using it for bookmark menus, favorite lists, search engine
          results, and device screens.
        </p>
        <a class="top" href="#top">
          Top
        </a>
      </article>
      <article id="css">
        <h3>Cascading Stylesheets</h3>
        <p>
          Incorporating stylesheets into websites and apps allows developers to
          override the predefined style and layout of HTML elements. By using
          stylesheets, we can
          <strong>restyle default HTML elements</strong> and customize how they
          look and behave for the user. This is critically important for
          improving a website's usability, readability, and legibility, as well
          as conforming to a brand's unique visual identity.
        </p>
        <h4>Five ways to incorporate stylesheets</h4>
        <p>
          External stylesheet files can be
          <strong>
            &lt;<code>link</code>&gt;ed
          </strong>{" "}
          in the global &lt;<code>head</code>&gt; section of a website's HTML.
          This allows for multiple pages within a website to make use of a
          single, global stylesheet. Specific components can utilize distinctive
          external stylesheets by either getting &lt;
          <code>link</code>&gt;ed after the global .css file or{" "}
          <strong>imported</strong> into a global stylesheet. Styles can also be{" "}
          <strong>embedded</strong> directly into an HTML file by using a &lt;
          <code>style</code>&gt; tag. It is also possible to target single HTML
          elements by adding
          <strong>inline</strong> style attributes and values. Finally,
          <strong>JavaScript</strong> allows developers to manipulate the
          Document Object Model in order to change the style of particular HTML
          elements.
        </p>
        <a class="top" href="#top">
          Top
        </a>
      </article>
      <article id="javaScript">
        <h3>JavaScript</h3>
        <p>
          The <strong>main data types</strong> of JavaScript consist of numbers,
          Boolean values, strings, symbols, the special values
          <code>undefined</code> and <code>null</code>, and objects.
        </p>
        <p>
          In JavaScript, <strong>objects</strong> are name-value pairs that
          allow users to create, read, update, and delete multiple types of
          data. Object names are often referred to as <em>properties</em>.
          <strong>Arrays</strong> in JavaScript are simply objects with
          properties that correspond to the strings: '0', '1', '2', etc.
          Elements within an array can be accessed directly by providing a
          0-based index for the relevant value. <strong>JSON</strong> stands for
          JavaScript Object Notation, which is a widely-used format for
          exchanging data between different applications. JSON allows users to
          map objects in a program to a string in JSON format. That data can
          then be easily exchanged and parsed to create JavaScript objects from
          each JSON string.
        </p>
        <p>
          <strong>Conditionals and loops</strong> in JavaScript are used to
          control program branching and decision-making. When evaluating
          conditionals, it's important to make use of strict-equality
          comparisons between elements of the same data type. There are several
          types of JavaScript loops, including <code>while</code> and
          <code>do while</code> loops, as well as <code>for</code>,
          <code>for of</code>, and for in loops. Each of these evaluate a loop
          conditional upon every loop cycle to determine whether the code should
          continue running.
        </p>
        <p>
          <strong>Object-oriented programming</strong> is a programming pattern
          that allows users to design software around the concept of objects.
          Classes and prototypes are used to build objects and define their
          identity, state, and behavior. Programs can then be constructed
          entirely from objects, which can interact with one another, share
          and/or and modify data, create new objects, and determine overall
          program behavior.
        </p>
        <p>
          <strong>Functional programming</strong> is a programming concept built
          around the fact that in JavaScript, functions are 'first-class'
          citizens. This allows users to assign functions to variables, define
          functions that intake other functions as arguments, and write
          functions that return other functions.
        </p>
        <a class="top" href="#top">
          Top
        </a>
      </article>
    </>
  );
}

export default TopicsPage;
