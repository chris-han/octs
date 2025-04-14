// Data structure for the knowledge graph
const graphData = {
    nodes: [
        // Value System Nodes (Core values, remain unchanged)
        { id: "openness", group: "values", label: "开放交流", description: "封闭系统熵增寂灭是必然；个体或组织如果成为封闭系统，熵增腐败也是必然的" },
        { id: "teamwork", group: "values", label: "团队协作", description: "世界不是孤立事件的集合，创新涌现的前提是组织构造的多样性和复杂性" },
        { id: "task_completion", group: "values", label: "任务达成", description: "组织和个体都是有目的主体，个体是实现组织目标的功能单元" },
        { id: "self_improvement", group: "values", label: "自主精进", description: "世界是变化的，而且是非线性变化，混沌和秩序对立统一、相互转化" },
        { id: "integrity", group: "values", label: "诚实守信", description: "技术进步减少了信息差，最大的风险往往来自能力不足或回避现实，或二者兼有" },
        
        // Positive Behavior Nodes
        { id: "knowledge_sharing", group: "behaviors", label: "建立个人知识系统", type: "positive" },
        { id: "capability_monitoring", group: "behaviors", label: "设置能力基线报警", type: "positive" },
        { id: "talent_flow", group: "behaviors", label: "建立人才流动机制", type: "positive" },
        { id: "distributed_cognition", group: "behaviors", label: "平衡分布式认知与组织共识", type: "positive" },
        { id: "innovation_network", group: "behaviors", label: "促进人才多样性创新", type: "positive" },
        { id: "team_goal_alignment", group: "behaviors", label: "个体任务服从团队目标", type: "positive" },
        { id: "task_feedback", group: "behaviors", label: "建立任务结果反馈", type: "positive" },
        { id: "info_system", group: "behaviors", label: "利用信息系统监测", type: "positive" },
        { id: "feedback_channel", group: "behaviors", label: "适配反馈通道", type: "positive" },
        { id: "value_selection", group: "behaviors", label: "价值观自主选择", type: "positive" },
        { id: "rapid_iteration", group: "behaviors", label: "短期快速试错", type: "positive" },
        { id: "system_balance", group: "behaviors", label: "平衡自治与规则", type: "positive" },
        { id: "negotiation", group: "behaviors", label: "基于价值差异化谈判", type: "positive" },
        { id: "risk_monitoring", group: "behaviors", label: "诚实面对风险", type: "positive" },
        { id: "trust_verification", group: "behaviors", label: "信任但要验证", type: "positive" },

        // Negative Behavior Nodes
        { id: "closed_system", group: "behaviors", label: "封闭系统思维", type: "negative" },
        { id: "local_optimization", group: "behaviors", label: "局部利益优化", type: "negative" },
        { id: "perfect_planning", group: "behaviors", label: "追求完美规划", type: "negative" },
        { id: "information_asymmetry", group: "behaviors", label: "利用信息差", type: "negative" },
        { id: "blind_trust", group: "behaviors", label: "盲目信任", type: "negative" },

        // Philosophy/Mindset Nodes (New addition)
        // Positive Philosophy Nodes
        { id: "growth_mindset", group: "philosophy", label: "成长型思维", description: "强调持续学习和发展的心态，优于固定型思维模式", type: "positive" },
        { id: "holistic_optimization", group: "philosophy", label: "整体优化思维", description: "注重系统性思考，追求整体最优而非局部最优", type: "positive" },
        { id: "result_oriented", group: "philosophy", label: "结果导向思维", description: "关注实际成果而非仅关注过程执行", type: "positive" },
        { id: "experimental_mindset", group: "philosophy", label: "实验迭代思维", description: "倾向于快速试错和迭代，而非追求完美决策", type: "positive" },
        { id: "continuous_verification", group: "philosophy", label: "持续验证思维", description: "重视持续验证而非静态承诺，不断确认和调整", type: "positive" },

        // Negative Philosophy Nodes
        { id: "fixed_mindset", group: "philosophy", label: "静态思维", description: "固守现有认知，缺乏成长意愿", type: "negative" },
        { id: "local_mindset", group: "philosophy", label: "局部思维", description: "只关注局部利益，忽视整体效果", type: "negative" },
        { id: "process_oriented", group: "philosophy", label: "过程导向思维", description: "过分关注执行过程，忽视实际成果", type: "negative" },
        { id: "perfect_mindset", group: "philosophy", label: "完美主义思维", description: "过分追求完美规划，导致行动迟缓", type: "negative" },
        { id: "static_promise", group: "philosophy", label: "静态承诺思维", description: "依赖一次性承诺，缺乏持续验证", type: "negative" }
    ],
    links: [
        // 1. Value-to-Value Relationships (Core structure)
        { source: "openness", target: "teamwork", value: 1, type: "positive", relationship: "value" },
        { source: "teamwork", target: "task_completion", value: 1, type: "positive", relationship: "value" },
        { source: "task_completion", target: "self_improvement", value: 1, type: "positive", relationship: "value" },
        { source: "self_improvement", target: "integrity", value: 1, type: "positive", relationship: "value" },
        { source: "integrity", target: "openness", value: 1, type: "positive", relationship: "value" },
        { source: "openness", target: "self_improvement", value: 1, type: "positive", relationship: "value" },
        { source: "teamwork", target: "integrity", value: 1, type: "positive", relationship: "value" },

        // 2. Direct Behavior to Value Links (Positive)
        { source: "knowledge_sharing", target: "openness", value: 1, type: "positive", relationship: "direct" },
        { source: "capability_monitoring", target: "openness", value: 1, type: "positive", relationship: "direct" },
        { source: "talent_flow", target: "openness", value: 1, type: "positive", relationship: "direct" },
        { source: "distributed_cognition", target: "teamwork", value: 1, type: "positive", relationship: "direct" },
        { source: "innovation_network", target: "teamwork", value: 1, type: "positive", relationship: "direct" },
        { source: "team_goal_alignment", target: "teamwork", value: 1, type: "positive", relationship: "direct" },
        { source: "task_feedback", target: "task_completion", value: 1, type: "positive", relationship: "direct" },
        { source: "info_system", target: "task_completion", value: 1, type: "positive", relationship: "direct" },
        { source: "feedback_channel", target: "task_completion", value: 1, type: "positive", relationship: "direct" },
        { source: "value_selection", target: "self_improvement", value: 1, type: "positive", relationship: "direct" },
        { source: "rapid_iteration", target: "self_improvement", value: 1, type: "positive", relationship: "direct" },
        { source: "system_balance", target: "self_improvement", value: 1, type: "positive", relationship: "direct" },
        { source: "negotiation", target: "integrity", value: 1, type: "positive", relationship: "direct" },
        { source: "risk_monitoring", target: "integrity", value: 1, type: "positive", relationship: "direct" },
        { source: "trust_verification", target: "integrity", value: 1, type: "positive", relationship: "direct" },

        // 3. Direct Behavior to Value Links (Negative)
        { source: "closed_system", target: "openness", value: -1, type: "negative", relationship: "direct" },
        { source: "local_optimization", target: "teamwork", value: -1, type: "negative", relationship: "direct" },
        { source: "perfect_planning", target: "self_improvement", value: -1, type: "negative", relationship: "direct" },
        { source: "information_asymmetry", target: "integrity", value: -1, type: "negative", relationship: "direct" },
        { source: "blind_trust", target: "integrity", value: -1, type: "negative", relationship: "direct" },

        // 4. Cross-Value Behavior Links
        { source: "knowledge_sharing", target: "teamwork", value: 1, type: "positive", relationship: "cross" },
        { source: "distributed_cognition", target: "openness", value: 1, type: "positive", relationship: "cross" },
        { source: "task_feedback", target: "integrity", value: 1, type: "positive", relationship: "cross" },
        { source: "talent_flow", target: "self_improvement", value: 1, type: "positive", relationship: "cross" },
        { source: "info_system", target: "openness", value: 1, type: "positive", relationship: "cross" },
        { source: "innovation_network", target: "self_improvement", value: 1, type: "positive", relationship: "cross" },
        { source: "system_balance", target: "teamwork", value: 1, type: "positive", relationship: "cross" },
        { source: "risk_monitoring", target: "openness", value: 1, type: "positive", relationship: "cross" },
        { source: "rapid_iteration", target: "task_completion", value: 1, type: "positive", relationship: "cross" },

        // 5. Negative Cross-Value Behavior Links
        { source: "local_optimization", target: "integrity", value: -1, type: "negative", relationship: "cross" },
        { source: "closed_system", target: "teamwork", value: -1, type: "negative", relationship: "cross" },
        { source: "blind_trust", target: "task_completion", value: -1, type: "negative", relationship: "cross" },
        { source: "perfect_planning", target: "teamwork", value: -1, type: "negative", relationship: "cross" },
        { source: "information_asymmetry", target: "openness", value: -1, type: "negative", relationship: "cross" },

        // 6. Philosophy to Values Links (New addition)
        { source: "growth_mindset", target: "openness", value: 1, type: "positive", relationship: "philosophy" },
        { source: "holistic_optimization", target: "teamwork", value: 1, type: "positive", relationship: "philosophy" },
        { source: "result_oriented", target: "task_completion", value: 1, type: "positive", relationship: "philosophy" },
        { source: "experimental_mindset", target: "self_improvement", value: 1, type: "positive", relationship: "philosophy" },
        { source: "continuous_verification", target: "integrity", value: 1, type: "positive", relationship: "philosophy" },

        // 7. Negative Philosophy to Values Links
        { source: "fixed_mindset", target: "openness", value: -1, type: "negative", relationship: "philosophy" },
        { source: "local_mindset", target: "teamwork", value: -1, type: "negative", relationship: "philosophy" },
        { source: "process_oriented", target: "task_completion", value: -1, type: "negative", relationship: "philosophy" },
        { source: "perfect_mindset", target: "self_improvement", value: -1, type: "negative", relationship: "philosophy" },
        { source: "static_promise", target: "integrity", value: -1, type: "negative", relationship: "philosophy" },

        // 8. Philosophy to Behavior Links
        { source: "growth_mindset", target: "knowledge_sharing", value: 1, type: "positive", relationship: "philosophy" },
        { source: "holistic_optimization", target: "team_goal_alignment", value: 1, type: "positive", relationship: "philosophy" },
        { source: "result_oriented", target: "task_feedback", value: 1, type: "positive", relationship: "philosophy" },
        { source: "experimental_mindset", target: "rapid_iteration", value: 1, type: "positive", relationship: "philosophy" },
        { source: "continuous_verification", target: "trust_verification", value: 1, type: "positive", relationship: "philosophy" },

        // 9. Cross-Philosophy Links (showing relationships between different mindsets)
        { source: "growth_mindset", target: "experimental_mindset", value: 1, type: "positive", relationship: "philosophy" },
        { source: "holistic_optimization", target: "result_oriented", value: 1, type: "positive", relationship: "philosophy" },
        { source: "experimental_mindset", target: "continuous_verification", value: 1, type: "positive", relationship: "philosophy" },
        { source: "result_oriented", target: "continuous_verification", value: 1, type: "positive", relationship: "philosophy" }
    ]
};

// Configuration for the graph visualization
const config = {
    nodeRadius: 8,
    valueNodeRadius: 12,
    linkDistance: 80, // Reduced from 100
    charge: -300, // Reduced from -400 for less repulsion
    width: 1000,
    height: 600,
    zoom: {
        min: 0.5,
        max: 2,
        default: 0.8 // Default zoom level to show everything
    },
    colors: {
        values: "#3f51b5",
        positiveBehavior: "#4CAF50",
        negativeBehavior: "#f44336",
        linkPositive: "#4CAF50",
        linkNegative: "#f44336",
        highlight: "#FFC107",
        dimmed: "#cccccc",
        // Add dark theme colors
        dark: {
            values: "#757de8",
            positiveBehavior: "#66bb6a",
            negativeBehavior: "#ef5350",
            linkPositive: "#66bb6a",
            linkNegative: "#ef5350",
            highlight: "#ffd54f",
            dimmed: "#424242",
            background: "#121212",
            text: "#ffffff"
        }
    },

    linkDistance: 100, // 增加连接距离，让节点间距更大
    charge: -400, // 增加排斥力，避免节点重叠
    
    // 添加新的力导向配置
    forceConfig: {
        // 价值观节点之间的特殊引力
        valueForce: -800,
        // 行为节点与价值观节点之间的引力
        behaviorForce: -200
    },
    
    // 调整节点大小
    nodeRadius: 6, // 稍微减小普通节点
    valueNodeRadius: 15, // 增大价值观节点
    
    // 添加标签配置
    labels: {
        fontSize: {
            values: "14px",
            behaviors: "12px"
        },
        distance: {
            values: 20,
            behaviors: 15
        }
    }
};

// Add function to get theme-aware colors
function getThemeColor(colorKey) {
    const isDark = document.documentElement.classList.contains('dark');
    return isDark ? config.colors.dark[colorKey] || config.colors[colorKey] : config.colors[colorKey];
}

// Initialize the graph
function initGraph() {
    // Clear both the graph and controls
    d3.select("#culture-graph-controls").selectAll("*").remove();
    const svg = d3.select("#culture-graph")
        .attr("viewBox", [0, 0, config.width, config.height]);
    svg.selectAll("*").remove();

    // Create controls container with flexbox
    const controls = d3.select("#culture-graph-controls")
        .style("display", "flex")
        .style("gap", "1rem")
        .style("align-items", "center");

    // Add zoom controls
    const zoomControls = controls.append("div")
        .attr("class", "flex items-center gap-2");

    zoomControls.append("button")
        .attr("class", "zoom-btn bg-primary hover:bg-primary-dark text-white w-8 h-8 rounded-full shadow transition-colors flex items-center justify-center")
        .html('<i class="fas fa-minus"></i>')
        .on("click", () => zoomBy(0.8));

    zoomControls.append("button")
        .attr("class", "zoom-btn bg-primary hover:bg-primary-dark text-white w-8 h-8 rounded-full shadow transition-colors flex items-center justify-center")
        .html('<i class="fas fa-plus"></i>')
        .on("click", () => zoomBy(1.2));

    // Add reset view button
    const resetButton = controls.append("button")
        .attr("class", "reset-view-btn bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full shadow transition-colors")
        .text("重置视图");

    // Create main container group
    const g = svg.append("g");

    // Add zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([config.zoom.min, config.zoom.max])
        .on("zoom", (event) => {
            g.attr("transform", event.transform);
        });

    svg.call(zoom);

    // Create arrow markers with theme-aware colors
    g.append("defs").selectAll("marker")
        .data(["positive", "negative"])
        .enter().append("marker")
        .attr("id", d => `arrow-${d}`)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 20)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("fill", d => d === "positive" ? getThemeColor("linkPositive") : getThemeColor("linkNegative"))
        .attr("d", "M0,-5L10,0L0,5");

    // Create the simulation with adjusted forces
    const simulation = d3.forceSimulation(graphData.nodes)
    .force("link", d3.forceLink(graphData.links)
        .id(d => d.id)
        .distance(d => {
            // 价值观节点之间的连接使用更大的距离
            if (d.source.group === "values" && d.target.group === "values") {
                return config.linkDistance * 1.5;
            }
            return config.linkDistance;
        }))
    .force("charge", d3.forceManyBody()
        .strength(d => {
            // 价值观节点有更强的排斥力
            if (d.group === "values") {
                return config.forceConfig.valueForce;
            }
            return config.charge;
        }))
    .force("center", d3.forceCenter(config.width / 2, config.height / 2))
    .force("collision", d3.forceCollide().radius(d => {
        // 价值观节点有更大的碰撞半径
        return (d.group === "values" ? config.valueNodeRadius : config.nodeRadius) * 2;
    }))
    .force("x", d3.forceX(config.width / 2).strength(0.1))
    .force("y", d3.forceY(config.height / 2).strength(0.1));

    // Create links
    const link = g.append("g")
        .selectAll("line")
        .data(graphData.links)
        .join("line")
        .attr("stroke", d => d.type === "positive" ? getThemeColor("linkPositive") : getThemeColor("linkNegative"))
        .attr("stroke-width", d => {
            switch(d.relationship) {
                case "value": return 3; // 价值观之间的连接更粗
                case "direct": return 2; // 直接影响普通粗细
                case "cross": return 1; // 跨价值观影响较细
                default: return 2;
            }
        })
        .attr("stroke-dasharray", d => {
            // 跨价值观的影响使用虚线
            return d.relationship === "cross" ? "3,3" : "none";
        })
        .attr("opacity", d => {
            // 价值观之间的连接更突出
            return d.relationship === "value" ? 0.8 : 0.6;
        })
        .attr("marker-end", d => `url(#arrow-${d.type})`);

    // Create nodes
    const node = g.append("g")
        .selectAll("circle")
        .data(graphData.nodes)
        .join("circle")
        .attr("r", d => d.group === "values" ? config.valueNodeRadius : config.nodeRadius)
        .attr("fill", d => {
            if (d.group === "values") return getThemeColor("values");
            return d.type === "positive" ? getThemeColor("positiveBehavior") : getThemeColor("negativeBehavior");
        });

    // Add labels
    const label = g.append("g")
        .selectAll("text")
        .data(graphData.nodes)
        .join("text")
        .text(d => d.label)
        .attr("font-size", "12px")
        .attr("dx", 12)
        .attr("dy", 4)
        .attr("class", "dark:text-white");

    // Function to reset view with proper scaling
    function resetView() {
        // Calculate the bounding box of the graph
        const bounds = g.node().getBBox();
        const dx = bounds.width;
        const dy = bounds.height;
        const x = bounds.x + dx / 2;
        const y = bounds.y + dy / 2;

        // Calculate the scale to fit the graph
        const scale = Math.min(
            config.width / dx,
            config.height / dy
        ) * config.zoom.default;

        // Calculate transform to center and scale the graph
        const transform = d3.zoomIdentity
            .translate(config.width / 2 - x * scale, config.height / 2 - y * scale)
            .scale(scale);

        // Apply the transform with transition
        svg.transition()
            .duration(750)
            .call(zoom.transform, transform);
    }

    // Function to zoom by a factor
    function zoomBy(factor) {
        svg.transition()
            .duration(300)
            .call(zoom.scaleBy, factor);
    }

    // Add reset button click handler
    resetButton.on("click", resetView);

    // Add hover interactions
    node.on("mouseover", handleNodeHover)
        .on("mouseout", handleNodeUnhover);

    // Add drag behavior
    node.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    // Update positions on simulation tick
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        label
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    });

    // Node hover handlers
    function handleNodeHover(event, d) {
        const connectedNodeIds = new Set();
        const relevantLinks = graphData.links.filter(link => {
            if (link.source.id === d.id || link.target.id === d.id) {
                connectedNodeIds.add(link.source.id);
                connectedNodeIds.add(link.target.id);
                return true;
            }
            return false;
        });

        link.attr("opacity", l => relevantLinks.includes(l) ? 1 : 0.1);
        node.attr("opacity", n => connectedNodeIds.has(n.id) ? 1 : 0.1);
        label.attr("opacity", n => connectedNodeIds.has(n.id) ? 1 : 0.1);

        updateDescription(d);
    }

    function handleNodeUnhover() {
        link.attr("opacity", 1);
        node.attr("opacity", 1);
        label.attr("opacity", 1);
        clearDescription();
    }

    // Drag handlers
    function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }

    // Initial layout
    simulation
        .alpha(1)
        .restart();

    // Set initial view after a short delay to let the simulation settle
    setTimeout(resetView, 100);
}

// Keep the updateDescription and clearDescription functions as they are...

// Add theme change listener
document.addEventListener('themeChanged', initGraph);

// Update description panel
function updateDescription(node) {
    const descriptionEl = document.getElementById("graph-description");
    if (descriptionEl) {
        descriptionEl.innerHTML = `
            <h4 class="text-lg font-bold mb-2">${node.label}</h4>
            <p class="text-gray-600 dark:text-gray-300">${node.description}</p>
        `;
    }
}

function clearDescription() {
    const descriptionEl = document.getElementById("graph-description");
    if (descriptionEl) {
        descriptionEl.innerHTML = `
            <p class="text-gray-500">悬停在节点上查看详细信息</p>
        `;
    }
}

// Initialize graph when document is ready
document.addEventListener("DOMContentLoaded", initGraph);

// Handle window resize
window.addEventListener("resize", initGraph);