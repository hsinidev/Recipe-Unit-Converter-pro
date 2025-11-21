import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <article className="relative bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
                <header className="mb-8 text-center border-b border-white/10 pb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Ultimate Guide to Kitchen Measurements & Conversions</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to know about measuring ingredients accurately, the science of baking, and mastering the tools of the trade.</p>
                </header>
                
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-full' : 'max-h-[4.5em]'}`}>
                   <div className={`${!isExpanded ? 'line-clamp-2' : ''}`}>
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-sky-100 prose-a:text-sky-400 hover:prose-a:text-sky-300 prose-strong:text-white prose-table:border-white/10 prose-th:bg-white/5 prose-th:p-4 prose-td:p-4">
                        
                        <p>Cooking is an art, but baking is a science. In the culinary world, the difference between a masterpiece and a disaster often comes down to a single teaspoon. Whether you are a seasoned chef or a beginner home cook, understanding the intricacies of kitchen measurements is fundamental to your success. This comprehensive guide explores the systems of measurement, the debate between weight and volume, and provides the essential data you need to convert recipes with confidence.</p>

                        <h3>Table of Contents</h3>
                        <ul>
                            <li><a href="#introduction">Introduction: The Precision of Cooking</a></li>
                            <li><a href="#systems">Global Systems: Metric vs. US Customary</a></li>
                            <li><a href="#weight-volume">The Great Debate: Weight vs. Volume</a></li>
                            <li><a href="#ingredients">Common Ingredient Densities</a></li>
                            <li><a href="#equipment">Essential Measuring Tools</a></li>
                            <li><a href="#liquid-dry">Liquid vs. Dry Measures</a></li>
                            <li><a href="#conversion-tips">Professional Conversion Tips</a></li>
                            <li><a href="#faq">Frequently Asked Questions</a></li>
                        </ul>

                        <h3 id="introduction">Introduction: The Precision of Cooking</h3>
                        <p>Have you ever followed a recipe exactly, only to have the cake sink in the middle or the cookies spread into a giant puddle? The culprit is rarely the oven or the recipe itself; it is almost always the measurement. Ingredients like flour, brown sugar, and cocoa powder are compressible. A cup of flour scooped directly from the bag can weigh 50% more than a cup of flour spooned lightly into the measure. This guide aims to eliminate that variability.</p>

                        <h3 id="systems">Global Systems: Metric vs. US Customary</h3>
                        <p>The world is divided into two primary camps regarding measurement: the Metric System and the US Customary System.</p>
                        
                        <h4>The Metric System (SI)</h4>
                        <p>Used by 95% of the world and 100% of the scientific community, the metric system is based on units of ten. It is logical, scalable, and precise.</p>
                        <ul>
                            <li><strong>Mass (Weight):</strong> Grams (g) and Kilograms (kg).</li>
                            <li><strong>Volume:</strong> Milliliters (ml) and Liters (L).</li>
                            <li><strong>Temperature:</strong> Celsius (°C).</li>
                        </ul>
                        <p>In a professional kitchen, grams are king. They allow for precision down to the individual unit, ensuring that a recipe produces the exact same result every single time it is made.</p>

                        <h4>The US Customary System</h4>
                        <p>Used primarily in the United States, Myanmar, and Liberia, this system is based on archaic British Imperial units. It relies heavily on volume measurements for dry ingredients, which is the source of many baking errors.</p>
                        <ul>
                            <li><strong>Volume:</strong> Teaspoons, Tablespoons, Cups, Pints, Quarts, Gallons.</li>
                            <li><strong>Weight:</strong> Ounces (oz) and Pounds (lb).</li>
                            <li><strong>Temperature:</strong> Fahrenheit (°F).</li>
                        </ul>
                        <p><strong>Crucial Distinction:</strong> In the US system, "Ounces" can refer to weight (16 oz in a pound) or volume (Fluid Ounces, 8 fl oz in a cup). They are NOT the same. 8 fluid ounces of honey weighs approximately 12 ounces by weight.</p>

                        <h3 id="weight-volume">The Great Debate: Weight vs. Volume</h3>
                        <p>If you take only one thing from this guide, let it be this: <strong>Buy a digital kitchen scale.</strong></p>
                        <p>Volume measurements are inconsistent by nature. Atmospheric humidity, how tightly an ingredient is packed, and even the shape of the measuring cup can alter the amount of ingredient you actually add.</p>
                        <p><strong>Example: 1 Cup of All-Purpose Flour</strong></p>
                        <ul>
                            <li><strong>Dip and Sweep Method:</strong> ~145 grams</li>
                            <li><strong>Spoon and Level Method:</strong> ~120 grams</li>
                            <li><strong>Sifted:</strong> ~115 grams</li>
                        </ul>
                        <p>In a cookie recipe calling for 3 cups of flour, the difference between the dip-and-sweep method and the spoon-and-level method could be nearly 75 grams—essentially an extra half-cup of flour! This leads to dry, crumbly cookies that don't spread.</p>

                        <h3 id="ingredients">Common Ingredient Densities</h3>
                        <p>Because you cannot convert grams to cups without knowing density, here is a reference chart for common kitchen staples. (Note: These are approximations based on the "Spoon and Level" method).</p>
                        
                        <table>
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>1 US Cup (Volume)</th>
                                    <th>Metric Weight</th>
                                    <th>US Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Water</td>
                                    <td>1 Cup</td>
                                    <td>237 g</td>
                                    <td>8.3 oz</td>
                                </tr>
                                <tr>
                                    <td>All-Purpose Flour</td>
                                    <td>1 Cup</td>
                                    <td>120 g</td>
                                    <td>4.2 oz</td>
                                </tr>
                                <tr>
                                    <td>Granulated Sugar</td>
                                    <td>1 Cup</td>
                                    <td>200 g</td>
                                    <td>7.1 oz</td>
                                </tr>
                                <tr>
                                    <td>Powdered Sugar</td>
                                    <td>1 Cup</td>
                                    <td>120 g</td>
                                    <td>4.2 oz</td>
                                </tr>
                                <tr>
                                    <td>Brown Sugar (Packed)</td>
                                    <td>1 Cup</td>
                                    <td>220 g</td>
                                    <td>7.8 oz</td>
                                </tr>
                                <tr>
                                    <td>Butter</td>
                                    <td>1 Cup (2 sticks)</td>
                                    <td>227 g</td>
                                    <td>8.0 oz</td>
                                </tr>
                                <tr>
                                    <td>Honey / Molasses</td>
                                    <td>1 Cup</td>
                                    <td>340 g</td>
                                    <td>12.0 oz</td>
                                </tr>
                                <tr>
                                    <td>Cocoa Powder</td>
                                    <td>1 Cup</td>
                                    <td>90 g</td>
                                    <td>3.2 oz</td>
                                </tr>
                                <tr>
                                    <td>Rolled Oats</td>
                                    <td>1 Cup</td>
                                    <td>90 g</td>
                                    <td>3.2 oz</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 id="equipment">Essential Measuring Tools</h3>
                        <p>To measure accurately, you need the right tools. Using a coffee mug to measure a cup of milk is a recipe for failure.</p>
                        <ol>
                            <li><strong>Digital Scale:</strong> The gold standard. Look for one that measures in grams and ounces, has a tare function (to zero out the bowl weight), and a capacity of at least 5kg.</li>
                            <li><strong>Liquid Measuring Cups:</strong> These are usually glass or clear plastic with a spout and handle. They have lines marking volume. You read them by placing the cup on a flat surface and getting down to eye level.</li>
                            <li><strong>Dry Measuring Cups:</strong> These come in sets (1/4, 1/3, 1/2, 1 cup). They are designed to be filled to the brim and leveled off with a straight edge.</li>
                            <li><strong>Measuring Spoons:</strong> For small amounts (teaspoon, tablespoon) of both liquid and dry ingredients.</li>
                        </ol>

                        <h3 id="liquid-dry">Liquid vs. Dry Measures</h3>
                        <p>Technically, 1 cup is 236ml regardless of whether it is liquid or dry. However, the <em>vessels</em> are designed differently for accuracy.</p>
                        <ul>
                            <li>If you try to measure flour in a liquid measuring cup, you can't level it off, leading to inaccurate amounts.</li>
                            <li>If you measure water in a dry measuring cup, you have to fill it to the absolute brim, making it nearly impossible to move without spilling.</li>
                        </ul>
                        <p><strong>The Bottom Line:</strong> Use liquid cups for liquids and dry cups for dry ingredients unless you are using a scale, in which case you can pour everything into one bowl!</p>

                        <h3 id="conversion-tips">Professional Conversion Tips</h3>
                        <p>Here are some pro-tips for using our unit converter effectively:</p>
                        <ul>
                            <li><strong>Round Wisely:</strong> If a conversion gives you 103.45 grams, it is safe to round to 100g or 105g for most home baking. Don't stress over decimals.</li>
                            <li><strong>Check Your Butter:</strong> In the US, butter is sold in sticks. 1 stick = 1/2 cup = 4 oz = 113 grams. This is a handy constant to memorize.</li>
                            <li><strong>Temperature Matters:</strong> Density changes with temperature. Hot water takes up slightly more volume than cold water. For general cooking, this is negligible, but for molecular gastronomy, it matters.</li>
                        </ul>

                        <h3 id="faq">Frequently Asked Questions (FAQ)</h3>
                        <dl>
                            <dt>Why is my cake dry?</dt>
                            <dd>The most common reason is too much flour caused by scooping with the measuring cup rather than weighing. Use a scale or the "spoon and level" method.</dd>

                            <dt>Can I interchange fluid ounces and ounces?</dt>
                            <dd>No. Fluid ounces measure volume (space), and ounces measure weight (mass). They are only equivalent for water. For ingredients like honey (heavier) or flour (lighter), they are very different.</dd>

                            <dt>What is a "heaping" teaspoon?</dt>
                            <dd>This is an inexact measure where the ingredient is piled as high as it can go on the spoon without falling off. It is roughly equivalent to 1.5 to 2 level teaspoons.</dd>

                            <dt>How many tablespoons are in a cup?</dt>
                            <dd>There are 16 tablespoons in 1 US cup.</dd>
                            
                            <dt>What is the difference between Imperial and US Customary?</dt>
                            <dd>While similar, they are not identical. An Imperial pint is 20 fluid ounces, while a US pint is 16 fluid ounces. Be careful when using old British recipes!</dd>
                        </dl>

                        <h3>Conclusion</h3>
                        <p>Mastering kitchen measurements is the first step toward culinary freedom. By understanding the tools and the math behind your food, you can stop worrying about the mechanics and start focusing on the flavors. Use our Recipe Unit Converter to navigate the numbers, but trust your senses and your scale to guide you to the perfect dish.</p>
                    </div>
                   </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button 
                        onClick={toggleExpansion}
                        className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-sky-600 font-lg rounded-full hover:bg-sky-500 focus:outline-none ring-offset-2 focus:ring-2 ring-sky-400"
                    >
                        <span>{isExpanded ? 'Show Less' : 'Read Full Guide'}</span>
                        <svg 
                            className={`w-5 h-5 ml-2 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                
                {!isExpanded && (
                    <div className="absolute bottom-[6rem] left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-b-3xl"></div>
                )}
            </article>
        </div>
    );
};

export default SeoArticle;